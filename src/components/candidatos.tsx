"use client";

import { useState, useEffect } from "react";
import { Candidato } from "../data/candidatos";

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

export function Candidatos({ dadosCandidatos, fotoFolder = "fotos" }: { dadosCandidatos: Candidato[], fotoFolder?: string }) {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="candidatos" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-blue-600 text-sm font-semibold uppercase tracking-widest">
            Candidatos Registrados no TSE
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold mt-2 text-slate-900">
            Principais Candidatos
          </h2>
          <p className="text-slate-500 mt-4 max-w-2xl mx-auto">
            Conheça as propostas de governo dos principais candidatos
            na corrida presidencial de 2026.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {dadosCandidatos.map((c: Candidato) => (
            <div
              key={c.id}
              className="candidate-card bg-white rounded-2xl overflow-hidden shadow-md border border-slate-100 flex flex-col h-full"
            >
              {/* Header */}
              <div
                className="p-6 text-white relative overflow-hidden"
                style={{ backgroundColor: c.cor }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="relative">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-white/20 backdrop-blur-sm text-xs font-bold px-3 py-1 rounded-full">
                      {c.siglaPartido}
                    </span>
                    {c.paginas && c.paginas > 0 && (
                      <span className="text-xs text-white/70">
                        {c.paginas} páginas
                      </span>
                    )}
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <CandidateImage 
                      candidato={c} 
                      folder={fotoFolder}
                      className="w-16 h-16 rounded-full border-2 border-white shadow-md bg-white flex-shrink-0 object-cover object-[50%_25%]" 
                    />
                    <div>
                      <h3 className="text-xl font-bold leading-tight">{c.nome}</h3>
                      <p className="text-sm text-white/80 mt-1">
                        {c.vice ? `Vice: ${c.vice}` : "Vice não informado"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Body */}
              <div className="p-6">
                <p className="text-sm text-slate-500 mb-2 font-medium">
                  📄 {c.planoNome}
                </p>
                <p className="text-sm text-slate-700 mb-4 italic">
                  &ldquo;{c.destaque}&rdquo;
                </p>

                {/* Proposal Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {c.propostas.map((p: any) => (
                    <span
                      key={p.tema}
                      className="proposal-tag bg-slate-100 text-slate-600"
                    >
                      {p.icone} {p.tema}
                    </span>
                  ))}
                </div>

                {/* Expand Button */}
                <button
                  onClick={() => toggleExpand(c.id)}
                  className="w-full text-sm font-semibold py-2.5 rounded-lg transition-all duration-200 cursor-pointer"
                  style={{
                    color: c.cor,
                    backgroundColor: `${c.cor}10`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = `${c.cor}20`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = `${c.cor}10`;
                  }}
                >
                  {expandedId === c.id
                    ? "▲ Ocultar Propostas"
                    : "▼ Ver Propostas Detalhadas"}
                </button>

                {/* Expanded Proposals */}
                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    expandedId === c.id
                      ? "max-h-[2000px] opacity-100 mt-4"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="space-y-4">
                    {c.propostas.map((p: any) => (
                      <div
                        key={p.tema}
                        className="bg-slate-50 rounded-xl p-4 border border-slate-100"
                      >
                        <h4 className="font-semibold text-slate-800 mb-1 flex items-center gap-2">
                          <span>{p.icone}</span> {p.tema}
                        </h4>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          {p.descricao}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* PDF Link */}
                {c.pdfUrl && (
                  <a
                    href={c.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 flex items-center justify-center gap-2 w-full text-sm font-semibold py-2.5 rounded-lg border-2 transition-all duration-200 hover:shadow-md"
                    style={{
                      color: c.cor,
                      borderColor: `${c.cor}40`,
                      backgroundColor: `${c.cor}08`,
                    }}
                  >
                    📄 Ver Plano de Governo Completo (PDF)
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="mt-12 text-center">
          <p className="text-xs text-slate-400 max-w-2xl mx-auto">
            ⚠️ As informações acima são baseadas nos planos de governo
            registrados no TSE e em reportagens de veículos de imprensa. Para
            consultar os documentos oficiais na íntegra, acesse o{" "}
            <a
              href="https://divulgacandcontas.tse.jus.br/divulga/#/home"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              DivulgaCandContas
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
