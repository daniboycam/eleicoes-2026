import { Metadata } from "next";
import { notFound } from "next/navigation";
import { candidatos } from "../../../data/candidatos";
import { governadores } from "../../../data/governadores";
import { Navbar } from "../../../components/navbar";
import { Footer } from "../../../components/footer";
import Link from "next/link";
import { ShareButton } from "./share-button";
import { ChatCandidato } from "../../../components/chat-candidato";

function getCandidato(id: string) {
  const isPresident = candidatos.find((c) => c.id === id);
  if (isPresident) return { candidato: isPresident, folder: "fotos", type: "presidente" };
  
  const isGovernor = governadores.find((g) => g.id === id);
  if (isGovernor) return { candidato: isGovernor, folder: "fotos-gov", type: "governador" };

  return null;
}

export function generateStaticParams() {
  const presidentIds = candidatos.map((c) => ({ id: c.id }));
  const governorIds = governadores.map((g) => ({ id: g.id }));
  return [...presidentIds, ...governorIds];
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const data = getCandidato(resolvedParams.id);
  
  if (!data) {
    return { title: "Candidato não encontrado" };
  }

  const { candidato, type } = data;
  const cargo = type === "presidente" ? "Presidência" : "Governo do DF";
  const title = `${candidato.nome} (${candidato.siglaPartido}) - Propostas para a ${cargo} | Eleições 2026`;
  const description = `Conheça as propostas de ${candidato.nome} para a ${cargo}. Vice: ${candidato.vice || "A definir"}. ${candidato.destaque}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [`/logo.png`], // Could be improved to use candidate photo if we had absolute URLs
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`/logo.png`],
    }
  };
}

export default async function CandidatoPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const data = getCandidato(resolvedParams.id);

  if (!data) {
    notFound();
  }

  const { candidato: c, folder, type } = data;
  const cargo = type === "presidente" ? "Presidência da República" : "Governo do Distrito Federal";

  return (
    <main className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-900">
      <Navbar />

      {/* Hero Section */}
      <section 
        className="pt-32 pb-16 relative overflow-hidden"
        style={{ backgroundColor: c.corBg }}
      >
        <div className="absolute inset-0 opacity-10 mix-blend-overlay pointer-events-none" style={{ backgroundColor: c.cor }}></div>
        <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center md:items-end gap-8">
          
          <img 
            src={`/${folder}/${c.id}.jpg`} 
            alt={c.nome}
            className="w-32 h-32 md:w-40 md:h-40 object-cover object-[50%_15%] rounded-full border-4 shadow-xl flex-shrink-0"
            style={{ borderColor: c.cor }}
          />

          <div className="text-center md:text-left flex-1" style={{ color: c.corText }}>
            <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
              <span className="px-3 py-1 rounded-full text-sm font-bold bg-white/20 backdrop-blur-md">
                {c.siglaPartido}
              </span>
              <span className="text-sm font-medium opacity-80 uppercase tracking-wider">
                Candidato à {cargo}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-2 leading-tight">
              {c.nome}
            </h1>
            <h2 className="text-xl md:text-2xl font-medium opacity-90 mb-4">
              Vice: {c.vice || "A definir"}
            </h2>
            
            {c.planoNome && (
              <p className="text-lg italic opacity-80 max-w-2xl">
                Plano: "{c.planoNome}"
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 flex-1">
        <div className="container mx-auto px-4 max-w-5xl">
          
          <div className="mb-6">
            <Link href="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-600 transition-colors font-medium">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
              Voltar para a página inicial
            </Link>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100 dark:border-slate-700 mb-12 text-center">
            <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-4">Resumo da Campanha</h3>
            <p className="text-lg text-slate-600 dark:text-slate-300 italic leading-relaxed">
              "{c.destaque}"
            </p>
          </div>

          {/* Chat IA Section */}
          <section className="py-8 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl mb-12">
            <div className="container mx-auto px-4 max-w-4xl">
              <h2 className="text-2xl font-bold text-center text-slate-900 dark:text-white mb-2">
                🤖 Pergunte à IA
              </h2>
              <p className="text-center text-slate-600 dark:text-slate-400 mb-6 max-w-2xl mx-auto">
                Tire suas dúvidas sobre o que <strong>{c.nome}</strong> planeja fazer. A inteligência artificial responde usando apenas os dados do plano oficial de governo registrado no TSE.
              </p>
              <ChatCandidato candidatoId={c.id} isGovernor={type === "governador"} cor={c.cor} />
            </div>
          </section>

          <div className="flex items-center justify-between mb-8">
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white">
              Propostas de Governo
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {c.propostas.map((p: any) => (
              <div key={p.tema} className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl bg-slate-100 dark:bg-slate-700 p-3 rounded-xl">{p.icone}</span>
                  <h4 className="text-xl font-bold text-slate-800 dark:text-slate-100">{p.tema}</h4>
                </div>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  {p.descricao}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 flex flex-col md:flex-row gap-4 justify-center">
            {c.pdfUrl && (
              <a
                href={c.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold transition-transform hover:scale-105"
                style={{
                  backgroundColor: c.cor,
                  color: "#fff",
                }}
              >
                📄 Baixar Plano de Governo Oficial (PDF)
              </a>
            )}

            <ShareButton nome={c.nome} siglaPartido={c.siglaPartido} vice={c.vice} id={c.id} />
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
