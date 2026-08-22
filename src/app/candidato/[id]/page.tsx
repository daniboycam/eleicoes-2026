import { Metadata } from "next";
import { notFound } from "next/navigation";
import { candidatos } from "../../../data/candidatos";
import { governadores } from "../../../data/governadores";
import { Navbar } from "../../../components/navbar";
import { Footer } from "../../../components/footer";
import Link from "next/link";

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

  const shareText = `Veja as propostas de ${c.nome} (${c.siglaPartido}) para as Eleições 2026!\nVice: ${c.vice || "A definir"}\n\nAcesse: https://eleicoes-2026.vercel.app/candidato/${c.id}`;
  const shareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText)}`;

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
            className="w-48 h-48 md:w-64 md:h-64 object-cover object-[50%_25%] rounded-full border-4 shadow-xl"
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

            <a
              href={shareUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold bg-green-600 hover:bg-green-700 text-white transition-transform hover:scale-105"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
              </svg>
              Compartilhar Perfil
            </a>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
