export interface QuizQuestion {
  id: string;
  tema: string;
  texto: string;
  pontosConcordo: Record<string, number>;
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: "q1",
    tema: "Trabalho",
    texto: "Sou a favor do fim imediato da escala de trabalho 6x1 e da redução da jornada sem redução de salário.",
    pontosConcordo: { hertz: 3, samara: 3, edmilson: 3, rui: 3, lula: 1, flavio: -2, zema: -2, caiado: -1, clariana: -1, wilson: -1, renan: -1 }
  },
  {
    id: "q2",
    tema: "Segurança",
    texto: "Apoio penas mais duras, redução da maioridade penal para 16 anos e fim do relaxamento de prisões na audiência de custódia.",
    pontosConcordo: { zema: 3, renan: 3, flavio: 2, rui: -3, samara: -3, hertz: -3, edmilson: -3, lula: -1 }
  },
  {
    id: "q3",
    tema: "Economia e Estado",
    texto: "O Estado deve focar em parcerias público-privadas (PPPs), responsabilidade fiscal e cortes de gastos para equilibrar as contas.",
    pontosConcordo: { zema: 3, caiado: 3, flavio: 3, clariana: 2, wilson: 2, rui: -3, samara: -3, hertz: -3, edmilson: -3, lula: -1 }
  },
  {
    id: "q4",
    tema: "Saúde",
    texto: "O SUS deve investir fortemente em telemedicina, uso de Inteligência Artificial e remuneração de hospitais com base em metas e resultados.",
    pontosConcordo: { caiado: 3, cury: 3, clariana: 3, wilson: 2, edmilson: -2, hertz: -2, rui: -2, samara: -2 }
  },
  {
    id: "q5",
    tema: "Social",
    texto: "Os programas de transferência de renda (como o Bolsa Família) devem estar atrelados à qualificação profissional obrigatória ou frentes de trabalho.",
    pontosConcordo: { renan: 3, caiado: 3, zema: 2, flavio: 2, lula: -2, samara: -2, edmilson: -2, hertz: -2 }
  },
  {
    id: "q6",
    tema: "Saúde Mental",
    texto: "A saúde pública deve ser revolucionada com programas gigantescos de saúde emocional, prevenção ao suicídio e neuroinclusão nas escolas.",
    pontosConcordo: { cury: 3, lula: 1, samara: 1 }
  },
  {
    id: "q7",
    tema: "Reformas / Justiça",
    texto: "Precisamos de reformas radicais na justiça para limitar o poder das cortes superiores e evitar ativismo judicial ou censura.",
    pontosConcordo: { flavio: 3, renan: 2, rui: 3, lula: -3, edmilson: -2 }
  },
  {
    id: "q8",
    tema: "Papel do Estado",
    texto: "O Estado deve ser o motor da economia, mantendo setores estratégicos 100% públicos e revertendo privatizações de serviços essenciais.",
    pontosConcordo: { lula: 2, samara: 3, edmilson: 3, hertz: 3, rui: 3, caiado: -2, zema: -3, flavio: -3, clariana: -2, wilson: -2, renan: -2 }
  }
];
