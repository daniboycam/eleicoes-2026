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
    texto: "Precisamos de reformas radicais na justiça para limitar o poder das cortes superiores (STF) e evitar ativismo judicial ou censura.",
    pontosConcordo: { flavio: 3, renan: 2, rui: 3, lula: -3, edmilson: -2 }
  },
  {
    id: "q8",
    tema: "Papel do Estado",
    texto: "O Estado deve ser o motor da economia, mantendo setores estratégicos 100% públicos e revertendo privatizações de serviços essenciais.",
    pontosConcordo: { lula: 2, samara: 3, edmilson: 3, hertz: 3, rui: 3, caiado: -2, zema: -3, flavio: -3, clariana: -2, wilson: -2, renan: -2 }
  },
  {
    id: "q9",
    tema: "Armamento",
    texto: "O cidadão comum deve ter o direito amplo de possuir e portar armas de fogo para sua autodefesa e da sua propriedade.",
    pontosConcordo: { rui: 3, zema: 2, flavio: 2, caiado: 1, lula: -3, edmilson: -3, samara: -3, hertz: -3 }
  },
  {
    id: "q10",
    tema: "Meio Ambiente",
    texto: "O combate ao desmatamento e o rigor nas multas ambientais devem ser prioridade zero, mesmo que isso restrinja a expansão do agronegócio.",
    pontosConcordo: { samara: 3, edmilson: 3, hertz: 3, lula: 2, caiado: -2, zema: -2, flavio: -2, renan: -1 }
  },
  {
    id: "q11",
    tema: "Privatizações",
    texto: "Estatais gigantes como a Petrobras, Correios e Banco do Brasil devem ser privatizadas para atrair capital privado e reduzir o tamanho do governo.",
    pontosConcordo: { flavio: 3, zema: 3, caiado: 2, wilson: 1, lula: -3, edmilson: -3, samara: -3, hertz: -3, rui: -3 }
  },
  {
    id: "q12",
    tema: "Pautas de Costumes",
    texto: "O Estado deve respeitar a diversidade e garantir direitos pautados nos movimentos feministas, LGBTQIA+ e nas lutas contra o racismo.",
    pontosConcordo: { samara: 3, edmilson: 3, hertz: 3, lula: 2, flavio: -3, zema: -2, caiado: -2, renan: -2 }
  },
  {
    id: "q13",
    tema: "Reforma Tributária",
    texto: "Grandes fortunas, heranças e dividendos devem ser pesadamente taxados para financiar políticas de Estado de Bem-Estar Social.",
    pontosConcordo: { samara: 3, edmilson: 3, hertz: 3, rui: 3, lula: 2, zema: -3, flavio: -3, caiado: -2, renan: -2 }
  },
  {
    id: "q14",
    tema: "Educação",
    texto: "As escolas devem ter expansão para modelo de tempo integral, com forte presença de ensino técnico e meritocracia para professores.",
    pontosConcordo: { caiado: 3, zema: 2, clariana: 2, lula: 1, samara: -1, rui: -2, edmilson: -1 }
  },
  {
    id: "q15",
    tema: "Agronegócio vs Reforma Agrária",
    texto: "O Brasil precisa de uma Reforma Agrária radical com desapropriação de terras, limitando o poder dos grandes latifundiários exportadores.",
    pontosConcordo: { edmilson: 3, rui: 3, samara: 3, hertz: 3, lula: 1, caiado: -3, zema: -3, flavio: -3, renan: -2 }
  }
];
