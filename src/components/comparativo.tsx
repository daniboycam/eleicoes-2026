"use client";

import { useState, useEffect } from "react";
import {
  candidatos,
  temasComparacao,
  comparacoes,
  type TemaComparacao,
  type Candidato,
} from "../data/candidatos";

function CandidateImage({ candidato, className, folder = "fotos", size = 64 }: { candidato: any, className: string, folder?: string, size?: number }) {
  const [src, setSrc] = useState(`/${folder}/${candidato.id}.jpg`);

  // Sync state when props change
  useEffect(() => {
    setSrc(`/${folder}/${candidato.id}.jpg`);
  }, [candidato.id, folder]);

  return (
    <img
      src={src}
      onError={() => {
        setSrc(`https://ui-avatars.com/api/?name=${encodeURIComponent(candidato.nome)}&background=random&color=fff&size=${size}`);
      }}
      alt={candidato.nome}
      className={className}
    />
  );
}

export function Comparativo({ dadosCandidatos = candidatos, comparacoesData = comparacoes, temasData = temasComparacao, fotoFolder = "fotos" }: { dadosCandidatos?: Candidato[], comparacoesData?: any, temasData?: readonly string[], fotoFolder?: string }) {
  const [temaSelecionado, setTemaSelecionado] =
    useState<string>(temasData[0]);

  return (
    <section id="comparativo" className="py-20 bg-white dark:bg-slate-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-blue-600 text-sm font-semibold uppercase tracking-widest">
            Compare lado a lado
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold mt-2 text-slate-900 dark:text-white">
            Comparativo de Propostas
          </h2>
          <p className="text-slate-500 dark:text-slate-400 mt-4 max-w-2xl mx-auto">
            Selecione um tema para comparar as posições dos candidatos.
          </p>
        </div>

        {/* Theme Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {temasData.map((tema) => (
            <button
              key={tema}
              onClick={() => setTemaSelecionado(tema)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer ${
                temaSelecionado === tema
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-500/25"
                  : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
              }`}
            >
              {tema}
            </button>
          ))}
        </div>

        {/* Comparison Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-7xl mx-auto">
          {comparacoesData[temaSelecionado]?.map((item: any) => {
            const candidato = dadosCandidatos.find(
              (c) => c.id === item.candidatoId
            );
            if (!candidato) return null;
            return (
              <div
                key={item.candidatoId}
                className="bg-slate-50 dark:bg-slate-900 rounded-2xl p-5 border border-slate-100 dark:border-slate-700 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center gap-3 mb-4">
                  <CandidateImage 
                    candidato={candidato} 
                    folder={fotoFolder}
                    className="w-10 h-10 rounded-full border border-slate-200 dark:border-slate-700 object-cover object-[50%_25%] flex-shrink-0" 
                  />
                  <div>
                    <div className="flex items-center gap-2">
                      <span
                        className="w-2 h-2 rounded-full flex-shrink-0"
                        style={{ backgroundColor: candidato.cor }}
                      />
                      <span
                        className="text-xs font-bold px-2 py-0.5 rounded-full text-white"
                        style={{ backgroundColor: candidato.cor }}
                      >
                        {candidato.siglaPartido}
                      </span>
                    </div>
                    <span className="text-sm font-semibold text-slate-700 dark:text-slate-300 truncate block mt-1">
                      {candidato.nome}
                    </span>
                  </div>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {item.resumo}
                </p>
              </div>
            );
          })}
        </div>


      </div>
    </section>
  );
}
