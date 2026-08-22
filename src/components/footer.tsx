export function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              🗳️ Eleições 2026
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Plataforma informativa com as propostas de governo dos candidatos
              à Presidência da República, baseadas nos planos oficiais
              registrados no TSE.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Fontes Oficiais</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://divulgacandcontas.tse.jus.br/divulga/#/home"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-blue-400 transition-colors"
                >
                  📄 DivulgaCandContas (TSE)
                </a>
              </li>
              <li>
                <a
                  href="https://www.tse.jus.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-blue-400 transition-colors"
                >
                  🏛️ Tribunal Superior Eleitoral
                </a>
              </li>
              <li>
                <a
                  href="https://www.tse.jus.br/servicos-eleitorais/titulo-e-local-de-votacao/consulta-por-nome"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-green-400 transition-colors flex items-center gap-1"
                >
                  📍 Consultar Local de Voto
                </a>
              </li>
              <li>
                <a
                  href="https://www.tre-sp.jus.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-blue-400 transition-colors"
                >
                  📌 TRE — Calendário Eleitoral
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Datas Importantes</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>📅 1º Turno: <strong className="text-white">4 de outubro de 2026</strong></li>
              <li>📅 2º Turno: <strong className="text-white">25 de outubro de 2026</strong></li>
              <li>📋 Registro: <strong className="text-white">15 de agosto de 2026</strong></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-slate-500">
              &copy; 2026 — Projeto informativo sem vínculo partidário.
            </p>
            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-500 bg-slate-800 px-3 py-1.5 rounded-full">
                ⚠️ Este site não possui afiliação com partidos políticos ou candidatos
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
