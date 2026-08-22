"use client";

import { useState } from "react";
import { useChat } from "ai/react";
import ReactMarkdown from "react-markdown";

export function GlobalChat() {
  const [isOpen, setIsOpen] = useState(false);
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
    api: "/api/chat-global",
    onError: (err) => {
      alert("Erro no Chat Global: " + err.message);
    }
  });

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-2xl transition-all duration-300 flex items-center justify-center ${
          isOpen ? "bg-red-500 hover:bg-red-600 rotate-90" : "bg-blue-600 hover:bg-blue-700 hover:scale-110"
        }`}
        aria-label="Abrir analista político"
      >
        {isOpen ? (
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        )}
      </button>

      {/* Chat Window */}
      <div
        className={`fixed bottom-24 right-6 z-50 w-[90vw] md:w-[400px] h-[550px] max-h-[80vh] bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700 flex flex-col transition-all duration-300 origin-bottom-right ${
          isOpen ? "scale-100 opacity-100" : "scale-0 opacity-0 pointer-events-none"
        }`}
      >
        {/* Header */}
        <div className="bg-blue-600 p-4 rounded-t-2xl flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-xl">🤖</div>
            <div>
              <h3 className="font-bold text-white leading-tight">Analista Político</h3>
              <p className="text-blue-100 text-xs">Comparações em tempo real</p>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.length === 0 && (
            <div className="text-center text-slate-500 dark:text-slate-400 mt-8 space-y-4">
              <p className="font-medium">Olá! Eu sou a inteligência artificial da plataforma.</p>
              <p className="text-sm">Experimente perguntar algo como:</p>
              <div className="flex flex-col gap-2 mt-2">
                <button onClick={() => handleInputChange({ target: { value: "Quais candidatos defendem a privatização da Petrobras?" } } as any)} className="text-xs bg-slate-100 dark:bg-slate-800 p-2 rounded text-left hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                  "Quais candidatos defendem a privatização da Petrobras?"
                </button>
                <button onClick={() => handleInputChange({ target: { value: "Compare a proposta de segurança do Lula e do Caiado." } } as any)} className="text-xs bg-slate-100 dark:bg-slate-800 p-2 rounded text-left hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                  "Compare a proposta de segurança do Lula e do Caiado."
                </button>
              </div>
            </div>
          )}

          {messages.map((m) => (
            <div key={m.id} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
              <div 
                className={`max-w-[85%] p-3 rounded-2xl prose prose-sm dark:prose-invert ${
                  m.role === "user" 
                    ? "bg-blue-600 text-white rounded-br-none" 
                    : "bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 rounded-bl-none"
                }`}
              >
                {m.role === "user" ? m.content : <ReactMarkdown>{m.content}</ReactMarkdown>}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-slate-100 dark:bg-slate-800 text-slate-500 p-3 rounded-2xl rounded-bl-none text-sm animate-pulse">
                Analisando planos...
              </div>
            </div>
          )}
        </div>

        {/* Input */}
        <form onSubmit={handleSubmit} className="p-3 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700 rounded-b-2xl flex gap-2">
          <input
            value={input}
            onChange={handleInputChange}
            placeholder="Pergunte ao analista..."
            className="flex-1 bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={isLoading || !input.trim()}
            className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white p-2 w-10 h-10 rounded-xl flex items-center justify-center transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
          </button>
        </form>
      </div>
    </>
  );
}

