import Link from "next/link";

export function Hero({
  title = "Eleições Presidenciais",
  description = "Compare as propostas de governo dos principais candidatos à Presidência da República, baseadas nos planos oficiais registrados no",
  stats = {
    candidatos: 13,
    principais: 5,
    temas: 26,
  }
}: {
  title?: string;
  description?: string;
  stats?: { candidatos: number; principais: number; temas: number };
}) {
  return (
    <section
      id="inicio"
      className="relative bg-slate-900 text-white min-h-screen flex items-center overflow-hidden"
    >
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <span className="inline-block bg-blue-500/20 border border-blue-400/30 backdrop-blur-sm text-blue-300 text-sm font-medium px-5 py-2 rounded-full mb-8">
            🗓️ 1º Turno: 4 de outubro de 2026
          </span>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6">
            {title}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-yellow-400 to-blue-400">
              2026
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            {description}{" "}
            <strong className="text-white">
              Tribunal Superior Eleitoral (TSE)
            </strong>
            .
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/match"
              className="bg-green-600 hover:bg-green-700 hover:scale-105 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 shadow-xl shadow-green-500/25 flex items-center gap-2"
            >
              Quem é seu Candidato?
            </Link>
            <a
              href="#candidatos"
              className="bg-blue-600 hover:bg-blue-700 hover:scale-105 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-xl shadow-blue-500/25"
            >
              Ver Candidatos
            </a>
            <a
              href="#comparativo"
              className="border border-white/20 hover:bg-white/10 hover:scale-105 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300"
            >
              Comparar Propostas
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-16 max-w-lg mx-auto">
            <div className="text-center">
              <p className="text-3xl font-bold text-blue-400">{stats.candidatos}</p>
              <p className="text-sm text-slate-400 mt-1">Candidatos</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-green-400">{stats.principais}</p>
              <p className="text-sm text-slate-400 mt-1">Principais</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-yellow-400">{stats.temas}</p>
              <p className="text-sm text-slate-400 mt-1">Áreas Temáticas</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 50L48 45C96 40 192 30 288 35C384 40 480 60 576 65C672 70 768 60 864 50C960 40 1056 30 1152 35C1248 40 1344 60 1392 70L1440 80V100H0V50Z"
            fill="#f8fafc"
          />
        </svg>
      </div>
    </section>
  );
}
