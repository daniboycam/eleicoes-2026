"use client";
import { useState } from "react";
import { Navbar } from "../components/navbar";
import { Hero } from "../components/hero";
import { Candidatos } from "../components/candidatos";
import { Comparativo } from "../components/comparativo";
import { Calendario } from "../components/calendario";
import { Pesquisas } from "../components/pesquisas";
import { Footer } from "../components/footer";

import { candidatos, comparacoes, temasComparacao } from "../data/candidatos";
import { governadores, comparacoesGov, temasComparacaoGov } from "../data/governadores";

export default function Home() {
  const [activeTab, setActiveTab] = useState<"presidencia" | "governador">("presidencia");

  const dadosAtuais = activeTab === "presidencia" ? candidatos : governadores;
  const comparacoesAtuais = activeTab === "presidencia" ? comparacoes : comparacoesGov;
  const temasAtuais = activeTab === "presidencia" ? temasComparacao : temasComparacaoGov;
  const folderAtual = activeTab === "presidencia" ? "fotos" : "fotos-gov";

  const title = activeTab === "presidencia" ? "Eleições Presidenciais" : "Eleições para Governador (DF)";
  const description = activeTab === "presidencia" 
    ? "Compare as propostas de governo dos principais candidatos à Presidência da República, baseadas nos planos oficiais registrados no TSE." 
    : "Compare as propostas de governo dos candidatos ao Governo do Distrito Federal, baseadas nos planos oficiais registrados no TSE.";
  
  const stats = activeTab === "presidencia" ? {
    candidatos: candidatos.length,
    principais: 5,
    temas: Object.keys(comparacoes).length,
  } : {
    candidatos: governadores.length,
    principais: 4,
    temas: Object.keys(comparacoesGov).length,
  };

  return (
    <main>
      <Navbar />
      <Hero title={title} description={description} stats={stats} />
      
      {/* Tabs Container */}
      <section className={"bg-slate-50 pt-10 pb-4 dark:bg-slate-900"}>
        <div className={"container mx-auto px-4 max-w-7xl"}>
          <div className={"flex justify-center flex-wrap gap-2"}>
            <div className={"inline-flex bg-white dark:bg-slate-800 rounded-full p-1 shadow-sm border border-slate-200 dark:border-slate-700"}>
              <button
                onClick={() => setActiveTab("presidencia")}
                className={`px-6 md:px-8 py-3 rounded-full text-base md:text-lg font-medium transition-all duration-300 ${
                  activeTab === "presidencia"
                    ? "bg-slate-900 dark:bg-slate-700 text-white shadow-md"
                    : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-700/50"
                }`}
              >
                🇧🇷 Presidência do Brasil
              </button>
              <button
                onClick={() => setActiveTab("governador")}
                className={`px-6 md:px-8 py-3 rounded-full text-base md:text-lg font-medium transition-all duration-300 ${
                  activeTab === "governador"
                    ? "bg-slate-900 dark:bg-slate-700 text-white shadow-md"
                    : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-700/50"
                }`}
              >
                🏛️ Governador (DF)
              </button>
            </div>
          </div>
        </div>
      </section>

      {activeTab === "presidencia" && <Pesquisas />}
      <Candidatos dadosCandidatos={dadosAtuais} fotoFolder={folderAtual} />
      <Comparativo dadosCandidatos={dadosAtuais} comparacoesData={comparacoesAtuais} temasData={temasAtuais} fotoFolder={folderAtual} />
      <Calendario activeTab={activeTab} />
      <Footer />
    </main>
  );
}

