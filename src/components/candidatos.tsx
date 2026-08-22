"use client";

import { useState, useEffect } from "react";
import { Candidato } from "../data/candidatos";
import Link from "next/link";

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
  const [busca, setBusca] = useState("");
  const [baseUrl, setBaseUrl] = useState("https://eleicoes-2026.vercel.app");

  useEffect(() => {
    setBaseUrl(window.location.origin);
  }, []);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const candidatosFiltrados = dadosCandidatos.filter((c) => {
    const termo = busca.toLowerCase();
    return (
      c.nome.toLowerCase().includes(termo) ||
      c.siglaPartido.toLowerCase().includes(termo) ||
      (c.vice && c.vice.toLowerCase().includes(termo))
    );
  });

  return (
    <section id="candidatos" className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <span className="text-blue-600 text-sm font-semibold uppercase tracking-widest">
            Candidatos Registrados no TSE
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold mt-2 text-slate-900 dark:text-white">
            Principais Candidatos
          </h2>
          <p className="text-slate-500 dark:text-slate-400 mt-4 max-w-2xl mx-auto">
            Conheça as propostas de governo dos candidatos.
          </p>
        </div>

        <div className="max-w-md mx-auto mb-12">
          <div className="relative">
            <input
              type="text"
              placeholder="Buscar por nome, vice ou partido..."
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
              className="w-full px-4 py-3 pl-12 rounded-xl border border-slate-200 dark:border-slate-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-800 shadow-sm"
            />
            <svg className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {candidatosFiltrados.length === 0 && (
            <div className="col-span-full text-center py-10 text-slate-500 dark:text-slate-400">
              Nenhum candidato encontrado com "{busca}".
            </div>
          )}
          {candidatosFiltrados.map((c: Candidato) => (
            <div
              key={c.id}
              className="candidate-card bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-md border border-slate-100 dark:border-slate-700 flex flex-col h-full"
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
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <CandidateImage 
                      candidato={c} 
                      folder={fotoFolder}
                      className="w-16 h-16 rounded-full border-2 border-white shadow-md bg-white dark:bg-slate-800 flex-shrink-0 object-cover object-[50%_25%]" 
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
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-2 font-medium">
                  📄 {c.planoNome}
                </p>
                <p className="text-sm text-slate-700 dark:text-slate-300 mb-4 italic">
                  &ldquo;{c.destaque}&rdquo;
                </p>

                {/* Proposal Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {c.propostas.map((p: any) => (
                      <span
                        key={p.tema}
                        title={p.tema}
                        className="proposal-tag bg-slate-100 dark:bg-slate-700/50 text-slate-700 dark:text-slate-300 text-lg px-2 py-1"
                      >
                        {p.icone}
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
                        className="bg-slate-50 dark:bg-slate-900 rounded-xl p-4 border border-slate-100 dark:border-slate-700"
                      >
                        <h4 className="font-semibold text-slate-800 mb-1 flex items-center gap-2">
                          <span>{p.icone}</span> {p.tema}
                        </h4>
                        <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                          {p.descricao}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-5 flex gap-3 w-full">
                  {/* Perfil Link */}
                  <Link
                    href={`/candidato/${c.id}`}
                    className="flex-1 flex items-center justify-center gap-2 text-sm font-bold py-3 rounded-xl transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 text-white"
                    style={{ backgroundColor: c.cor }}
                  >
                    👤 Ver Perfil
                  </Link>

                  {/* Compartilhar Link */}
                  <a
                    href={`https://api.whatsapp.com/send?text=${encodeURIComponent(`Veja as propostas de ${c.nome} (${c.siglaPartido}) para as Eleições 2026!\nVice: ${c.vice || 'A definir'}\n\nAcesse: ${baseUrl}/candidato/${c.id}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 text-sm font-bold py-3 rounded-xl bg-[#25D366] hover:bg-[#1DA851] text-white hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
                    </svg>
                    WhatsApp
                  </a>
                </div>
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
