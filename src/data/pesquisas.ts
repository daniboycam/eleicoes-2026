export type ResultadoPesquisa = {
  candidatoId: string;
  percentual: number;
};

export type Pesquisa = {
  instituto: string;
  data: string;
  registroTse: string;
  margemErro: number;
  entrevistados: number;
  resultados: ResultadoPesquisa[];
  brancosNulos: number;
  naoSabe: number;
};

export const ultimaPesquisa: Pesquisa = {
  instituto: "Datafolha",
  data: "21 de Agosto de 2026",
  registroTse: "BR-04496/2026",
  margemErro: 2,
  entrevistados: 2058,
  resultados: [
    { candidatoId: "lula", percentual: 39 },
    { candidatoId: "flavio", percentual: 33 },
    { candidatoId: "caiado", percentual: 5 },
    { candidatoId: "renan", percentual: 4 },
    { candidatoId: "zema", percentual: 3 },
    { candidatoId: "marcal", percentual: 2 }, // chute realista based on others
  ],
  brancosNulos: 9,
  naoSabe: 5,
};


export const pesquisaGovernador: Pesquisa = {
  instituto: "Datafolha",
  data: "21 de Agosto de 2026",
  registroTse: "DF-07561/2026",
  margemErro: 3,
  entrevistados: 910,
  resultados: [
    { candidatoId: "celina", percentual: 30 },
    { candidatoId: "arruda", percentual: 28 },
    { candidatoId: "leandro", percentual: 11 },
    { candidatoId: "paula", percentual: 4 },
    { candidatoId: "cappelli", percentual: 3 },
  ],
  brancosNulos: 11,
  naoSabe: 8,
};
