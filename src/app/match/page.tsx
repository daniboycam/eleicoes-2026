"use client";

import { useState } from "react";
import Link from "next/link";
import { quizQuestions } from "../../data/quiz";
import { candidatos } from "../../data/candidatos";

export default function MatchEleitoral() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (multiplier: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = multiplier;
    setAnswers(newAnswers);

    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const getTopMatches = () => {
    // Calcular o score total na hora
    const scores: Record<string, number> = {};
    
    quizQuestions.forEach((q, index) => {
      const multiplier = answers[index];
      if (multiplier !== undefined) {
        Object.entries(q.pontosConcordo).forEach(([candId, points]) => {
          scores[candId] = (scores[candId] || 0) + (points * multiplier);
        });
      }
    });

    const sorted = Object.entries(scores)
      .sort(([, a], [, b]) => b - a)
      .map(([id, score]) => ({
        candidato: candidatos.find((c) => c.id === id),
        score
      }))
      .filter((m) => m.candidato);
    return sorted.slice(0, 3);
  };

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-900 pt-16 pb-12">
      <div className="container mx-auto px-4 max-w-2xl">
        
        <div className="mb-6">
          <Link href="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-600 transition-colors font-medium">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
            Voltar para a página inicial
          </Link>
        </div>

        {!showResult ? (
          <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-xl overflow-hidden p-8 md:p-12 relative">
            
            {currentQuestion > 0 && (
              <button 
                onClick={handleBack}
                className="absolute top-8 left-8 text-slate-400 hover:text-blue-600 transition-colors flex items-center gap-1 text-sm font-medium"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                Voltar
              </button>
            )}

            <div className="flex justify-center items-center mb-8 mt-6">
              <span className="text-sm font-bold text-blue-600 tracking-wider uppercase text-center block">
                {quizQuestions[currentQuestion].tema}
              </span>
            </div>
            
            <div className="text-center mb-6">
              <span className="text-sm font-medium text-slate-400">
                {currentQuestion + 1} de {quizQuestions.length}
              </span>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-white leading-relaxed mb-12 text-center">
              "{quizQuestions[currentQuestion].texto}"
            </h2>

            <div className="flex flex-col gap-4">
              <button
                onClick={() => handleAnswer(1)}
                className="w-full py-4 px-6 rounded-2xl bg-green-600 hover:bg-green-700 text-white font-bold text-lg transition-transform hover:scale-[1.02]"
              >
                👍 Concordo plenamente
              </button>
              <button
                onClick={() => handleAnswer(0)}
                className="w-full py-4 px-6 rounded-2xl bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-300 font-bold text-lg transition-transform hover:scale-[1.02]"
              >
                😶 Neutro / Pular
              </button>
              <button
                onClick={() => handleAnswer(-1)}
                className="w-full py-4 px-6 rounded-2xl bg-red-600 hover:bg-red-700 text-white font-bold text-lg transition-transform hover:scale-[1.02]"
              >
                👎 Discordo totalmente
              </button>
            </div>
          </div>
        ) : (
          <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-xl overflow-hidden p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-2">Seu Match Político</h2>
            <p className="text-slate-500 mb-10">Baseado nas suas respostas, estes são os candidatos com propostas mais alinhadas a você.</p>
            
            <div className="flex flex-col gap-6">
              {getTopMatches().map((match, index) => (
                <div key={match.candidato?.id} className={`flex items-center p-4 rounded-2xl border ${index === 0 ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20" : "border-slate-200 dark:border-slate-700"}`}>
                  <div className="text-4xl font-black text-slate-200 dark:text-slate-700 mr-4">
                    #{index + 1}
                  </div>
                  <img
                    src={`/fotos/${match.candidato?.id}.jpg`}
                    alt={match.candidato?.nome}
                    className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-md mr-4"
                    onError={(e) => { e.currentTarget.src = `https://ui-avatars.com/api/?name=${match.candidato?.nome}`; }}
                  />
                  <div className="text-left flex-1">
                    <h3 className="font-bold text-lg text-slate-800 dark:text-white">{match.candidato?.nome}</h3>
                    <p className="text-sm text-slate-500">{match.candidato?.siglaPartido}</p>
                  </div>
                  <Link href={`/candidato/${match.candidato?.id}`} className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-sm font-semibold transition-colors">
                    Ver Perfil
                  </Link>
                </div>
              ))}
            </div>

            <div className="mt-12 pt-6 border-t border-slate-200 dark:border-slate-700 flex justify-center gap-6">
              <button onClick={() => { setShowResult(false); setCurrentQuestion(quizQuestions.length - 1); }} className="text-slate-500 font-semibold hover:text-blue-600 transition-colors">
                Voltar à última pergunta
              </button>
              <button onClick={() => { setCurrentQuestion(0); setAnswers([]); setShowResult(false); }} className="text-blue-600 font-semibold hover:underline">
                Refazer Quiz do zero
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
