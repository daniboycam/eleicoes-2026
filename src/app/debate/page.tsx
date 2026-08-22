"use client";

import { useState, useRef, useEffect } from "react";
import { useChat } from "ai/react";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { candidatos } from "../../data/candidatos";
import { Navbar } from "../../components/navbar";

export default function DebatePage() {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const { messages, input, handleInputChange, handleSubmit, isLoading, error } = useChat({
    api: "/api/debate",
    body: {
      selectedIds
    }
  });

  const toggleCandidate = (id: string) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter(c => c !== id));
    } else {
      if (selectedIds.length < 4) {
        setSelectedIds([...selectedIds, id]);
      } else {
        alert("Selecione no máximo 4 candidatos para o debate!");
      }
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const customHandleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Garante que o form nativo não vai submeter e recarregar a página

    try {
      if (selectedIds.length < 2) {
        alert("Por favor, selecione pelo menos 2 candidatos para que haja um debate.");
        return;
      }
      if (!input.trim()) return;
      
      console.log("Iniciando debate com candidatos:", selectedIds, "e tema:", input);

      handleSubmit(e, {
        body: {
          selectedIds
        }
      });
    } catch (err: any) {
      console.error("Erro no customHandleSubmit:", err);
      alert("Ocorreu um erro no frontend: " + err.message);
    }
  };

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-900 flex flex-col">
      <Navbar />

      <section className="pt-32 pb-8 bg-slate-900 text-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-4xl font-bold mb-4">🥊 Simulador de Debate Virtual</h1>
          <p className="text-slate-400 text-lg">
            Escolha de 2 a 4 candidatos, digite um tema polêmico e deixe a Inteligência Artificial simular como seria o embate entre eles com base nos seus planos de governo oficiais!
          </p>
        </div>
      </section>

      <section className="py-8 flex-1">
        <div className="container mx-auto px-4 max-w-4xl flex flex-col h-[70vh]">
          
          {/* Candidate Selection */}
          <div className="mb-6 bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
            <h3 className="font-bold text-slate-800 dark:text-slate-200 mb-4 text-center">1. Selecione os Candidatos ({selectedIds.length}/4)</h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {candidatos.map(c => (
                <button
                  key={c.id}
                  onClick={() => toggleCandidate(c.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all ${
                    selectedIds.includes(c.id) 
                      ? "border-blue-500 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 shadow-md ring-2 ring-blue-500/20" 
                      : "border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:border-blue-300"
                  }`}
                >
                  <img 
                    src={`/fotos/${c.id}.jpg`} 
                    alt={c.nome} 
                    className="w-8 h-8 rounded-full object-cover border border-slate-200" 
                    onError={(e) => { e.currentTarget.src = `https://ui-avatars.com/api/?name=${c.nome}`; }}
                  />
                  <span className="font-semibold text-sm">{c.nome}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Chat Interface */}
          <div className="flex-1 bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 overflow-hidden flex flex-col">
            
            {/* Messages Area */}
            <div className="flex-1 p-6 overflow-y-auto bg-slate-50/50 dark:bg-slate-900/50">
              {messages.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-slate-400 opacity-60">
                  <div className="text-6xl mb-4">🎤</div>
                  <p>O palco está pronto. Envie um tema para começar!</p>
                  <p className="text-sm mt-2">Ex: "O que farão sobre a Segurança Pública?"</p>
                </div>
              ) : (
                <div className="space-y-6">
                  {messages.map((m) => (
                    <div
                      key={m.id}
                      className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`max-w-[85%] p-4 rounded-2xl ${
                          m.role === "user"
                            ? "bg-blue-600 text-white rounded-br-none"
                            : "bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 rounded-bl-none shadow-sm prose prose-slate dark:prose-invert"
                        }`}
                      >
                        {m.role === "user" ? (
                          <div className="font-medium">{m.content}</div>
                        ) : (
                          <ReactMarkdown>{m.content}</ReactMarkdown>
                        )}
                      </div>
                    </div>
                  ))}
                  {isLoading && (
                    <div className="flex justify-start">
                      <div className="bg-slate-200 dark:bg-slate-700 text-slate-500 rounded-2xl rounded-bl-none p-4 max-w-[80%] animate-pulse">
                        Os candidatos estão debatendo...
                      </div>
                    </div>
                  )}
                  {error && (
                    <div className="flex justify-center my-4">
                      <div className="bg-red-100 text-red-600 px-4 py-2 rounded-lg text-sm max-w-[80%] text-center">
                        Ocorreu um erro: {error.message || "Falha na comunicação com a IA"}
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>
              )}
            </div>

            {/* Input Form */}
            <form onSubmit={customHandleSubmit} className="p-4 bg-white dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700">
              <div className="flex items-center gap-3">
                <input
                  type="text"
                  value={input}
                  onChange={handleInputChange}
                  disabled={isLoading || selectedIds.length < 2}
                  placeholder={
                    selectedIds.length < 2 
                      ? "Selecione pelo menos 2 candidatos primeiro..." 
                      : "Digite um tema (ex: Inflação e Preços)..."
                  }
                  className="flex-1 bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white rounded-full px-6 py-4 outline-none focus:ring-2 focus:ring-blue-500 transition-all disabled:opacity-50"
                />
                <button
                  type="submit"
                  disabled={isLoading || selectedIds.length < 2 || !input.trim()}
                  className="bg-blue-600 hover:bg-blue-700 disabled:bg-slate-400 disabled:cursor-not-allowed text-white font-bold p-4 rounded-full transition-transform hover:scale-105"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
                </button>
              </div>
            </form>
          </div>

        </div>
      </section>
    </main>
  );
}
