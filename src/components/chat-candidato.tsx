"use client";

import { useChat } from "ai/react";

export function ChatCandidato({ candidatoId, isGovernor = false, cor }: { candidatoId: string; isGovernor?: boolean; cor: string }) {
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
    body: {
      candidatoId,
      isGovernor
    },
    onError: (err) => {
      alert("Erro na IA: " + err.message);
    }
  });

  return (
    <div className="w-full max-w-2xl mx-auto mt-12 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl overflow-hidden shadow-sm">
      {/* Header */}
      <div 
        className="p-4 text-white font-bold flex items-center gap-2"
        style={{ backgroundColor: cor }}
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
        Pergunte à Inteligência Artificial sobre as propostas
      </div>

      {/* Messages */}
      <div className="h-80 overflow-y-auto p-4 space-y-4 bg-slate-50 dark:bg-slate-800/50">
        {messages.length === 0 && (
          <div className="text-center text-slate-500 dark:text-slate-400 mt-10">
            <p>Faça uma pergunta sobre o plano de governo deste candidato.</p>
            <p className="text-sm mt-2 opacity-70">Ex: "O que ele propõe para a segurança?"</p>
          </div>
        )}
        
        {messages.map(m => (
          <div key={m.id} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
            <div 
              className={`max-w-[80%] p-3 rounded-2xl ${
                m.role === "user" 
                  ? "bg-slate-800 text-white rounded-br-none" 
                  : "bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-800 dark:text-slate-200 rounded-bl-none shadow-sm"
              }`}
            >
              {m.content}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 p-3 rounded-2xl rounded-bl-none shadow-sm flex gap-1 items-center">
              <div className="w-2 h-2 rounded-full bg-slate-400 animate-bounce"></div>
              <div className="w-2 h-2 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: "0.2s" }}></div>
              <div className="w-2 h-2 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: "0.4s" }}></div>
            </div>
          </div>
        )}
      </div>

      {/* Input */}
      <form onSubmit={handleSubmit} className="p-3 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700 flex gap-2">
        <input
          value={input}
          onChange={handleInputChange}
          placeholder="Digite sua pergunta..."
          className="flex-1 bg-slate-100 dark:bg-slate-800 border-none rounded-xl px-4 py-3 focus:outline-none focus:ring-2 dark:text-white"
          style={{ "--tw-ring-color": cor } as React.CSSProperties}
        />
        <button 
          type="submit" 
          disabled={isLoading || !input.trim()}
          className="p-3 rounded-xl text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105"
          style={{ backgroundColor: cor }}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
        </button>
      </form>
      <div className="text-center text-[10px] text-slate-400 py-2 bg-slate-50 dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
        As respostas são geradas por Inteligência Artificial com base exclusiva nos planos registrados no TSE e podem conter imprecisões.
      </div>
    </div>
  );
}

