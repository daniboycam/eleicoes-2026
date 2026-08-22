"use client";

import { ultimaPesquisa, pesquisaGovernador } from "../data/pesquisas";
import { candidatos } from "../data/candidatos";
import { governadores } from "../data/governadores";

export function Pesquisas({ activeTab }: { activeTab: "presidencia" | "governador" }) {
  const pesquisaAtual = activeTab === "presidencia" ? ultimaPesquisa : pesquisaGovernador;
  const listaCandidatos = activeTab === "presidencia" ? candidatos : governadores;
  const folder = activeTab === "presidencia" ? "fotos" : "fotos-gov";

  const resultadosDetalhados = pesquisaAtual.resultados.map((res) => {
    const candidato = listaCandidatos.find((c) => c.id === res.candidatoId);
    return {
      ...res,
      candidato,
    };
  }).filter(r => r.candidato);

  return (
    <section className="py-12 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                📊 Intenção de Voto (1º Turno)
              </h2>
              <p className="text-slate-600 dark:text-slate-400 mt-2">
                Última pesquisa divulgada pelo <strong>{pesquisaAtual.instituto}</strong> em {pesquisaAtual.data}.
              </p>
            </div>
            <div className="text-sm text-slate-500 dark:text-slate-500 text-left md:text-right bg-slate-50 dark:bg-slate-800 p-3 rounded-lg">
              <div>Margem de erro: <strong>±{pesquisaAtual.margemErro}%</strong></div>
              <div>Entrevistados: <strong>{pesquisaAtual.entrevistados}</strong></div>
              <div className="text-xs mt-1">TSE: {pesquisaAtual.registroTse}</div>
            </div>
          </div>

          <div className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-6 shadow-inner border border-slate-100 dark:border-slate-800">
            <div className="space-y-6">
              {resultadosDetalhados.map((res) => {
                const c = res.candidato!;
                return (
                  <div key={c.id} className="relative group">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <img 
                          src={`/${folder}/${c.id}.jpg`} 
                          alt={c.nome} 
                          className="w-10 h-10 rounded-full object-cover object-[50%_15%] border-2"
                          style={{ borderColor: c.cor }}
                        />
                        <div className="font-bold text-slate-800 dark:text-slate-200">
                          {c.nome} <span className="text-slate-400 text-sm font-normal">({c.siglaPartido})</span>
                        </div>
                      </div>
                      <div className="font-black text-xl" style={{ color: c.cor }}>
                        {res.percentual}%
                      </div>
                    </div>
                    
                    <div className="h-4 w-full bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden flex">
                      <div 
                        className="h-full rounded-full transition-all duration-1000 ease-out"
                        style={{ 
                          width: `${res.percentual}%`, 
                          backgroundColor: c.cor,
                          boxShadow: `0 0 10px ${c.cor}40`
                        }}
                      ></div>
                    </div>
                  </div>
                );
              })}

              <div className="pt-4 mt-6 border-t border-slate-200 dark:border-slate-700 grid grid-cols-2 gap-4 text-center">
                <div className="bg-white dark:bg-slate-800 p-3 rounded-xl border border-slate-100 dark:border-slate-700">
                  <div className="text-2xl font-bold text-slate-600 dark:text-slate-300">{pesquisaAtual.brancosNulos}%</div>
                  <div className="text-sm text-slate-500 font-medium">Brancos/Nulos</div>
                </div>
                <div className="bg-white dark:bg-slate-800 p-3 rounded-xl border border-slate-100 dark:border-slate-700">
                  <div className="text-2xl font-bold text-slate-600 dark:text-slate-300">{pesquisaAtual.naoSabe}%</div>
                  <div className="text-sm text-slate-500 font-medium">Não Sabe/Não Respondeu</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
