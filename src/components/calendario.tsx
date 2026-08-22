export function Calendario({ activeTab }: { activeTab: "presidencia" | "governador" }) {
  const eventos = [
    {
      data: "15 de agosto",
      titulo: "Prazo final para registro de candidaturas",
      descricao: activeTab === "presidencia" 
        ? "13 chapas registradas no TSE para a Presidência."
        : "11 chapas registradas no TSE para o Governo do Distrito Federal.",
      passado: true,
    },
    {
      data: "16 de agosto",
      titulo: "Início da campanha eleitoral",
      descricao: "Campanha nas ruas, internet, rádio e TV.",
      passado: true,
    },
    {
      data: "4 de outubro",
      titulo: "1º Turno das Eleições",
      descricao:
        "Votação para Presidente, Governadores, Senadores e Deputados.",
      passado: false,
    },
    {
      data: "25 de outubro",
      titulo: "2º Turno (se necessário)",
      descricao:
        "Segundo turno para Presidente e Governadores, caso nenhum candidato atinja maioria absoluta.",
      passado: false,
    },
  ];

  return (
    <section id="calendario" className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-blue-600 text-sm font-semibold uppercase tracking-widest">
            Datas Importantes
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold mt-2 text-slate-900 dark:text-white">
            Calendário Eleitoral
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-slate-200 hidden md:block" />

            <div className="space-y-8">
              {eventos.map((evento, index) => (
                <div
                  key={index}
                  className="flex gap-6 items-start"
                >
                  {/* Timeline Dot */}
                  <div className="hidden md:flex flex-shrink-0 w-12 h-12 items-center justify-center relative z-10">
                    <div
                      className={`w-4 h-4 rounded-full border-4 ${
                        evento.passado
                          ? "bg-green-500 border-green-200"
                          : "bg-blue-500 border-blue-200"
                      }`}
                    />
                  </div>

                  {/* Card */}
                  <div
                    className={`flex-1 rounded-2xl p-6 border transition-all duration-300 hover:shadow-md ${
                      evento.passado
                        ? "bg-white dark:bg-slate-800 border-green-200"
                        : "bg-white dark:bg-slate-800 border-blue-200 shadow-sm"
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <span
                        className={`text-xs font-bold px-3 py-1 rounded-full ${
                          evento.passado
                            ? "bg-green-100 text-green-700"
                            : "bg-blue-100 text-blue-700"
                        }`}
                      >
                        {evento.data}
                      </span>
                      {evento.passado && (
                        <span className="text-xs text-green-600 font-medium">
                          ✅ Concluído
                        </span>
                      )}
                      {!evento.passado && (
                        <span className="text-xs text-blue-600 font-medium">
                          📌 Próximo
                        </span>
                      )}
                    </div>
                    <h3 className="text-lg font-bold text-slate-800">
                      {evento.titulo}
                    </h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                      {evento.descricao}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
