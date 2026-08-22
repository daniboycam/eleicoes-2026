export interface Proposta {
  tema: string;
  icone: string;
  descricao: string;
}

export interface Candidato {
  id: string;
  nome: string;
  partido: string;
  siglaPartido: string;
  vice?: string;
  cor: string;
  corBg: string;
  corText: string;
  planoNome?: string;
  paginas?: number;
  propostas: Proposta[];
  destaque: string;
  pdfUrl?: string;
}

export const candidatos: Candidato[] = [
  {
    id: "lula",
    nome: "Luiz Inácio Lula da Silva",
    partido: "Partido dos Trabalhadores",
    siglaPartido: "PT",
      vice: "Geraldo Alckmin",
    cor: "#E3000B",
    corBg: "bg-red-600",
    corText: "text-red-600",
    pdfUrl: "/pdfs/lula.pdf",
    destaque: "Continuidade do projeto de desenvolvimento com redução das desigualdades.",
    propostas: [
      {
        tema: 'Economia', icone: '📊', descricao: 'Consolidar a reforma tributária progressiva, expandir investimentos estratégicos com o Novo PAC e impulsionar a reindustrialização sustentável via Nova Indústria Brasil (NIB).'
      },
      {
        tema: 'Social', icone: '🤝', descricao: 'Erradicar a pobreza extrema com a expansão do Bolsa Família, ações de segurança alimentar e combate ao endividamento das famílias via Desenrola Brasil.'
      },
      {
        tema: 'Meio Ambiente', icone: '🌱', descricao: 'Implementar o Plano de Transformação Ecológica, combater o desmatamento ilegal em todos os biomas e liderar a transição para uma economia de baixo carbono.'
      },
      {
        tema: 'Educação', icone: '📚', descricao: 'Ampliar o programa Pé-de-Meia contra a evasão no Ensino Médio e recompor investimentos federativos da educação básica ao ensino superior.'
      },
      {
        tema: 'Segurança', icone: '🛡️', descricao: 'Fortalecer o Sistema Único de Segurança Pública (SUSP) com foco em inteligência contra o crime organizado, controle de armas e cooperação nas fronteiras.'
      },
      {
        tema: 'Saúde', icone: '🏥', descricao: 'Fortalecer e modernizar o SUS, recuperando altas coberturas vacinais e assegurando soberania nacional na produção farmacêutica e sanitária.'
      }
    ]
  },
  {
    id: "flavio",
    nome: "Flávio Bolsonaro",
    partido: "Partido Liberal",
    siglaPartido: "PL",
      vice: "Alfredo Gaspar",
    cor: "#003DA5",
    corBg: "bg-blue-700",
    corText: "text-blue-700",
    pdfUrl: "/pdfs/flavio.pdf",
    destaque: "Foco em segurança pública com tolerância zero, enxugamento do Estado com redução de impostos, reforma do Judiciário e modernização digital dos serviços públicos.",
    propostas: [
      {
        tema: 'Segurança', icone: '🛡️', descricao: 'Enquadrar facções criminosas como terroristas, reduzir a maioridade penal, reforçar fronteiras com tropas de elite e endurecer o cumprimento de penas.'
      },
      {
        tema: 'Economia', icone: '📊', descricao: 'Revisar a reforma tributária para reduzir tributos no consumo, cortar gastos públicos, desregulamentar a economia e baratear itens essenciais.'
      },
      {
        tema: 'Democracia/Reformas', icone: '🏛️', descricao: 'Realizar reforma do Judiciário limitando o STF como corte puramente constitucional, promover reforma política e combater a censura e o ativismo judicial.'
      },
      {
        tema: 'Educação', icone: '📚', descricao: 'Focar na alfabetização e no ensino técnico alinhado ao mercado de trabalho, além de adotar sistema de vouchers para creches e escolas.'
      },
      {
        tema: 'Trabalho', icone: '💼', descricao: 'Estimular o empreendedorismo e a liberdade contratual do trabalhador sem dependência sindical, facilitando a transição para o mercado formal.'
      },
      {
        tema: 'Tecnologia', icone: '🤖', descricao: 'Implementar o Estado Digital unificado, utilizar inteligência artificial para agilizar atendimentos ao cidadão e zerar filas do INSS.'
      }
    ]
  },
  {
    id: "caiado",
    nome: "Ronaldo Caiado",
    partido: "Partido Social Democrático",
    siglaPartido: "PSD",
      vice: "Gilberto Kassab",
    cor: "#00A651",
    corBg: "bg-emerald-600",
    corText: "text-emerald-600",
    pdfUrl: "/pdfs/caiado.pdf",
    destaque: "Enfatiza a liderança federal no combate ao crime organizado, responsabilidade fiscal rigorosa e modernização da gestão pública em áreas essenciais.",
    propostas: [
      {
        tema: 'Segurança', icone: '🛡️', descricao: 'Liderança federal na segurança pública com integração de inteligência, proteção de fronteiras, asfixia financeira de facções e milícias.'
      },
      {
        tema: 'Economia', icone: '📊', descricao: 'Estabilização fiscal com corte de desperdícios, revisão de subsídios sem resultado e criação de ambiente de negócios favorável ao investimento privado.'
      },
      {
        tema: 'Educação', icone: '📚', descricao: 'Garantia de alfabetização na idade certa, avaliação contínua da aprendizagem e integração do ensino médio com formação técnica.'
      },
      {
        tema: 'Saúde', icone: '🏥', descricao: 'Modernização do SUS com foco preventivo, prontuário eletrônico interoperável e hospitais remunerados por qualidade e resultados.'
      },
      {
        tema: 'Meio Ambiente', icone: '🌱', descricao: 'Rigor no combate ao desmatamento e mineração ilegal, valorizando a bioeconomia e liderança na transição energética.'
      },
      {
        tema: 'Social', icone: '🤝', descricao: 'Manutenção da transferência de renda conectada a qualificação profissional, moradia e inclusão produtiva.'
      }
    ]
  },
  {
    id: "zema",
    nome: "Romeu Zema",
    partido: "Partido Novo",
    siglaPartido: "NOVO",
      vice: "Eduardo Girão",
    cor: "#FF6600",
    corBg: "bg-orange-500",
    corText: "text-orange-500",
    pdfUrl: "/pdfs/zema.pdf",
    destaque: "Foco em endurecimento penal implacável contra o crime organizado, corte radical de privilégios e controle dos gastos da máquina pública.",
    propostas: [
      {
        tema: 'Segurança', icone: '🛡️', descricao: 'Enquadrar facções criminosas como organizações terroristas, usar Forças Armadas para retomar territórios dominados e construir presídios de segurança máxima isolados.'
      },
      {
        tema: 'Justiça', icone: '⚖️', descricao: 'Reduzir a maioridade penal para 16 anos, acabar com o relaxamento de prisão na audiência de custódia para reincidentes e dar autonomia penal aos estados.'
      },
      {
        tema: 'Democracia/Reformas', icone: '🏛️', descricao: 'Limitar o foro privilegiado ao Presidente da República, coibir o ativismo judicial do STF e condicionar a progressão em corrupção à devolução integral dos desvios.'
      },
      {
        tema: 'Economia', icone: '📊', descricao: 'Extinguir supersalários e privilégios no setor público, impor rigoroso equilíbrio fiscal com corte de gastos estatais e incentivar investimentos privados.'
      },
      {
        tema: 'Social', icone: '🤝', descricao: 'Ampliar delegacias da mulher 24h, expandir as Patrulhas Maria da Penha para monitoramento de agressores e criar Salas Lilás de atendimento humanizado.'
      }
    ]
  },
  {
    id: "cury",
    nome: "Augusto Cury",
    partido: "Avante",
    siglaPartido: "AVANTE",
      vice: "Júlio Delgado",
    cor: "#1E40AF",
    corBg: "bg-blue-700",
    corText: "text-blue-700",
    planoNome: "O Brasil dos Nossos Sonhos",
    paginas: 200,
    pdfUrl: "/pdfs/cury.pdf",
    destaque: "Foco na proteção transversal de mulheres e crianças, governança orientada por metas e evidências, e modernização digital nos serviços essenciais.",
    propostas: [
      {
        tema: 'Social', icone: '🤝', descricao: 'Criação de rede integrada de proteção contra a violência a mulheres e priorização da primeira infância com ampliação de vagas em creches.' },
      { tema: "Segurança", descricao: "Programa Força Alerta Total (FATO) focado na cultura de paz e redução do extremismo polarizado.", icone: "🔹" },
      { tema: "Saúde", descricao: "Maior telemedicina do mundo (Tele Saúde Brasil), diagnóstico precoce (SEA) e foco intenso em saúde emocional e neuroinclusão.", icone: "🔹" },
      { tema: "Educação", descricao: "Revolução da consciência educacional, combatendo a polarização política e ensinando as pessoas a pensarem criticamente (DCD).", icone: "🔹" },
      { tema: "Infraestrutura", descricao: "Revolução logística no semiárido (Brasil Oásis), rodovias (BEE) e minerais estratégicos (PETRA BR).", icone: "🔹" }
]
  },
  {
    id: "marcal",
    nome: "Pablo Marçal",
    partido: "Partido Renovador Trabalhista Brasileiro",
    siglaPartido: "PRTB",
      vice: "Leonardo Avalanche",
    cor: "#8B5CF6",
    corBg: "bg-violet-500",
    corText: "text-violet-500",
    planoNome: "O Brasil dos Nossos Sonhos",
    paginas: 200,
    
    destaque: "Candidato não possui plano de governo registrado no TSE.",
    propostas: [
      { tema: "Economia", descricao: "O candidato não registrou plano de governo no TSE.", icone: "🔹" },
      { tema: "Segurança", descricao: "O candidato não registrou plano de governo no TSE.", icone: "🔹" },
      { tema: "Saúde", descricao: "O candidato não registrou plano de governo no TSE.", icone: "🔹" },
      { tema: "Reformas/Justiça", descricao: "O candidato não registrou plano de governo no TSE.", icone: "🔹" },
      { tema: "Trabalho", descricao: "O candidato não registrou plano de governo no TSE.", icone: "🔹" }
]
  },
  {
    id: "wilson",
    nome: "Wilson Grassi",
    partido: "Democrata",
    siglaPartido: "DEM",
      vice: "Suêd Haidar",
    cor: "#22C55E",
    corBg: "bg-green-500",
    corText: "text-green-500",
    pdfUrl: "/pdfs/wilson.pdf",
    destaque: "Criação do Imposto Único Federal para simplificar tributos e desonerar o trabalho, integrado a reformas na segurança, digitalização e Saúde Única.",
    propostas: [
      {
        tema: 'Economia', icone: '📊', descricao: 'Criar o Imposto Único Federal (IUF) sobre movimentações financeiras, substituindo tributos sobre produção e faturamento, e elevar a isenção do IRPF para 5 salários mínimos.'
      },
      {
        tema: 'Trabalho', icone: '💼', descricao: 'Eliminar a contribuição previdenciária patronal sobre a folha de pagamento para desonerar a contratação formal, combater a pejotização e incentivar novos empregos.'
      },
      {
        tema: 'Segurança', icone: '🛡️', descricao: 'Combater o crime organizado com isolamento de lideranças em presídios, asfixia financeira de facções, integração de inteligência e bases de dados.'
      },
      {
        tema: 'Saúde', icone: '🏥', descricao: 'Implementar o conceito de Saúde Única (humana, animal e ambiental), priorizar a prevenção e fortalecer a atenção primária no SUS.'
      },
      {
        tema: 'Tecnologia', icone: '🤖', descricao: 'Digitalizar o Estado e unificar bases de dados federais integradas para desburocratizar serviços, combater fraudes e automatizar concessões.'
      },
      {
        tema: 'Meio Ambiente', icone: '🌱', descricao: 'Promover políticas públicas estruturadas de proteção e direitos dos animais, articuladas à vigilância sanitária, sanidade agropecuária e infraestrutura.'
      }
    ]
  },
  {
    id: "clariana",
    nome: "Clariana Barão",
    partido: "Democracia Cristã",
    siglaPartido: "DC",
      vice: "Fabiana Torquato",
    cor: "#0284C7",
    corBg: "bg-sky-600",
    corText: "text-sky-600",
    pdfUrl: "/pdfs/clariana.pdf",
    destaque: "Uma revolução da consciência contra a polarização política, com foco em saúde emocional (Tele Saúde Brasil) e economia cooperativa.",
    propostas: [
      { tema: "Economia", descricao: "Fomento ao cooperativismo (BCOO), economia distribuída e comunidades empreendedoras no agro (Agroindústria Brasil).", icone: "🔹"
      },
      {
        tema: 'Economia', icone: '📊', descricao: 'Desregulamentação para abertura rápida de empresas, apoio ao crédito para pequenos negócios, atração de investimentos em logística e responsabilidade fiscal.'
      },
      {
        tema: 'Educação', icone: '📚', descricao: 'Prioridade à alfabetização na idade certa, valorização continuada de professores, expansão do ensino técnico regionalizado e introdução de inteligência artificial.'
      },
      {
        tema: 'Segurança', icone: '🛡️', descricao: 'Policiamento baseado em dados, monitoramento tecnológico de fronteiras com drones e radares, e asfixia financeira de facções e narcotráfico.'
      },
      {
        tema: 'Saúde', icone: '🏥', descricao: 'Fortalecimento da atenção primária com prevenção, expansão da telemedicina com IA na regulação de filas e avaliação científica para novas tecnologias no SUS.'
      },
      {
        tema: 'Democracia/Reformas', icone: '🏛️', descricao: 'Modernização do Estado com governo digital integrado, gestão pública orientada a metas e evidências, integridade nas compras e federalismo de resultados.'
      }
    ]
  },
  {
    id: "edmilson",
    nome: "Edmilson Costa",
    partido: "Partido Comunista Brasileiro",
    siglaPartido: "PCB",
      vice: "Cleusa Santos",
    cor: "#DC2626",
    corBg: "bg-red-600",
    corText: "text-red-600",
    pdfUrl: "/pdfs/edmilson.pdf",
    destaque: "Construção do Poder Popular e superação do capitalismo rumo ao socialismo, com estatização de setores estratégicos, democracia direta e garantia plena dos direitos da classe trabalhadora.",
    propostas: [
      {
        tema: 'Trabalho', icone: '💼', descricao: 'Redução da jornada para 30 horas semanais sem corte salarial, fim da escala 6x1, revogação das reformas trabalhista e previdenciária e salário mínimo baseado no Dieese.'
      },
      {
        tema: 'Economia', icone: '📊', descricao: 'Estatização do sistema financeiro, criação do Banco dos Trabalhadores, Petrobras 100% estatal, fim do arcabouço fiscal, revogação da autonomia do Banco Central e auditoria da dívida.'
      },
      {
        tema: 'Democracia/Reformas', icone: '🏛️', descricao: 'Convocação de Constituinte Popular, extinção do Senado para criação de Parlamento Unicameral, instituição de Conselhos Populares e mecanismo de mandatos revogáveis.'
      },
      {
        tema: 'Social', icone: '🤝', descricao: 'Criação da Lei de Responsabilidade Social para garantir recursos a serviços 100% públicos e gratuitos de saúde, educação e transporte, aliada à reforma agrária popular.'
      },
      {
        tema: 'Política Externa', icone: '🌐', descricao: 'Enfrentamento ao imperialismo, rompimento com a subordinação ao capital internacional e solidariedade a povos em luta pela autodeterminação e soberania nacional.'
      }
    ]
  },
  {
    id: "hertz",
    nome: "Hertz Dias",
    partido: "Partido Socialista dos Trabalhadores Unificado",
    siglaPartido: "PSTU",
      vice: "Vanessa Portugal",
    cor: "#B91C1C",
    corBg: "bg-red-700",
    corText: "text-red-700",
    pdfUrl: "/pdfs/hertz.pdf",
    destaque: "Proposta socialista e anti-imperialista pautada na expropriação de setores estratégicos, planejamento econômico e garantia de direitos e soberania para a classe trabalhadora.",
    propostas: [
      {
        tema: 'Economia', icone: '📊', descricao: 'Estatizar e expropriar empresas e setores estratégicos como Petrobras, Vale, energia e mineração, além de taxar lucros bilionários e controlar o sistema financeiro e a fuga de capitais.'
      },
      {
        tema: 'Trabalho', icone: '💼', descricao: 'Fim da escala 6x1, redução da jornada de trabalho sem redução salarial para promover o pleno emprego e combate à precarização de trabalhadores formais e de aplicativos.'
      },
      {
        tema: 'Política Externa', icone: '🌐', descricao: 'Rompimento com o imperialismo das grandes potências (EUA, Europa e China) e defesa da soberania nacional, cessando a evasão de riquezas.'
      },
      {
        tema: 'Tecnologia', icone: '🤖', descricao: 'Desenvolvimento de inteligência artificial e tecnologias estratégicas sob controle estatal e dos trabalhadores, integrando-as aos serviços públicos.'
      },
      {
        tema: 'Social', icone: '🤝', descricao: 'Reorientação da produção agrícola e industrial para o abastecimento interno e fortalecimento dos serviços públicos 100% estatais e gratuitos de saúde, educação e saneamento.'
      }
    ]
  },
  {
    id: "renan",
    nome: "Renan Santos",
    partido: "Missão",
    siglaPartido: "MISSÃO",
      vice: "Aroldo Medina",
    cor: "#F59E0B",
    corBg: "bg-amber-500",
    corText: "text-amber-500",
    pdfUrl: "/pdfs/renan.pdf",
    destaque: "Reorganização profunda do Estado brasileiro por meio de rigor fiscal, combate implacável ao crime organizado, responsabilização política por metas e modernização tecnológica.",
    propostas: [
      {
        tema: 'Segurança', icone: '🛡️', descricao: 'Aplicação do Direito Penal do Inimigo contra o crime organizado, decretação de estado de defesa, aumento de penas e alteração no ciclo das polícias.'
      },
      {
        tema: 'Economia', icone: '📊', descricao: 'Ajuste fiscal rigoroso com contenção de gastos públicos, criação de Zonas Econômicas Especiais e elevação dos investimentos em infraestrutura para 4% do PIB.'
      },
      {
        tema: 'Democracia/Reformas', icone: '🏛️', descricao: 'Lei de Responsabilidade Gerencial condicionando elegibilidade a metas de desempenho, e revisão do pacto federativo com redução do número de municípios.'
      },
      {
        tema: 'Social', icone: '🤝', descricao: 'Reforma do assistencialismo com substituição do Bolsa Família por frentes de trabalho remuneradas para a população em idade economicamente ativa.'
      },
      {
        tema: 'Saúde', icone: '🏥', descricao: 'Implementação do SUS Fila Zero com triagem por classificação de risco em vez de fila cronológica e integração de inteligência artificial nos atendimentos.'
      },
      {
        tema: 'Educação', icone: '📚', descricao: 'Priorização do ensino básico inspirada no modelo do Ceará, ampliação de vagas universitárias em STEM e substituição do sistema de cotas por bolsas por mérito.'
      }
    ]
  },
  {
    id: "rui",
    nome: "Rui Costa Pimenta",
    partido: "Partido da Causa Operária",
    siglaPartido: "PCO",
      vice: "Antônio Carlos",
    cor: "#991B1B",
    corBg: "bg-red-800",
    corText: "text-red-800",
    pdfUrl: "/pdfs/rui.pdf",
    destaque: "Defesa de uma revolução operária e socialista com estatização da economia, dissolução da PM e do STF, e revogação de todas as reformas neoliberais.",
    propostas: [
      {
        tema: 'Trabalho', icone: '💼', descricao: 'Reduzir a jornada para 35 horas semanais sem corte salarial, reajustar salários com aumento emergencial de 50%, proibir demissões e revogar as reformas trabalhista e previdenciária.'
      },
      {
        tema: 'Economia', icone: '📊', descricao: 'Reestatizar empresas privatizadas, estatizar o sistema financeiro, manter Petrobras 100% pública sob controle operário, extinguir a autonomia do BC e anular dívidas públicas.'
      },
      {
        tema: 'Democracia/Reformas', icone: '🏛️', descricao: 'Extinção do STF, eleição direta com mandatos revogáveis para todos os juízes e promotores, revogação da Lei da Ficha Limpa e fortalecimento de um governo operário e camponês.'
      },
      {
        tema: 'Educação', icone: '📚', descricao: 'Garantir ensino 100% público e gratuito, estatizar o ensino privado, acabar com os vestibulares assegurando livre ingresso universitário e fixar piso de R$ 8,5 mil a professores.'
      },
      {
        tema: 'Segurança', icone: '🛡️', descricao: 'Dissolução da Polícia Militar e do aparato repressivo, garantindo amplo direito ao armamento e criação de comitês de autodefesa popular para trabalhadores.'
      },
      {
        tema: 'Social', icone: '🤝', descricao: 'Reforma agrária com expropriação de latifúndios, demarcação de terras indígenas, expropriação de imóveis vagos e plano nacional de habitação gerido pelos trabalhadores.'
      }
    ]
  },
  {
    id: "samara",
    nome: "Samara Martins",
    partido: "Unidade Popular",
    siglaPartido: "UP",
      vice: "Raquel Brício",
    cor: "#000000",
    corBg: "bg-zinc-900",
    corText: "text-zinc-900",
    pdfUrl: "/pdfs/samara.pdf",
    destaque: "Superação do capitalismo e transição socialista por meio do controle operário da economia, valorização salarial e soberania nacional anti-imperialista.",
    propostas: [
      {
        tema: 'Direitos Trabalhistas', icone: '💼', descricao: 'Aumento emergencial de 100% do salário mínimo com valorização contínua rumo ao cálculo do DIEESE e revogação do Arcabouço Fiscal.'
      },
      {
        tema: 'Trabalho', icone: '💼', descricao: 'Fim imediato da escala 6x1 e estabelecimento da escala 4x3, reduzindo a jornada sem redução de salários.'
      },
      {
        tema: 'Economia', icone: '📊', descricao: 'Planificação democrática e socialista da economia, reindustrialização nacional, reforma agrária e recuperação do controle público de setores estratégicos.'
      },
      {
        tema: 'Política Externa', icone: '🌐', descricao: 'Defesa intransigente da soberania nacional e luta anti-imperialista contra a espoliação dos recursos naturais e interferências estrangeiras.'
      },
      {
        tema: 'Social', icone: '🤝', descricao: 'Garantia de emprego para todos os adultos capacitados, erradicação do trabalho infantil e combate ao racismo, machismo e LGBTfobia.'
      }
    ]
  }
];

export const temasComparacao = [
  "Economia",
  "Segurança",
  "Saúde",
  "Reformas/Justiça",
  "Trabalho",
] as const;

export type TemaComparacao = (typeof temasComparacao)[number];

export interface ComparacaoItem {
  candidatoId: string;
  resumo: string;
}

export const comparacoes: Record<string, {candidatoId: string, resumo: string}[]> = {
  "Economia": [
    { candidatoId: "lula", resumo: "Consolidar a reforma tributária progressiva, expandir investimentos estratégicos com o Novo PAC e impulsionar a reindustrialização sustentável via Nova Indústria Brasil (NIB)." },
    { candidatoId: "flavio", resumo: "Revisar a reforma tributária para reduzir tributos no consumo, cortar gastos públicos, desregulamentar a economia e baratear itens essenciais." },
    { candidatoId: "caiado", resumo: "Estabilização fiscal com corte de desperdícios, revisão de subsídios sem resultado e criação de ambiente de negócios favorável ao investimento privado." },
    { candidatoId: "zema", resumo: "Extinguir supersalários e privilégios no setor público, impor rigoroso equilíbrio fiscal com corte de gastos estatais e incentivar investimentos privados." },
    { candidatoId: "cury", resumo: "Sem proposta específica registrada para este tema." },
    { candidatoId: "marcal", resumo: "O candidato não registrou plano de governo no TSE." },
    { candidatoId: "wilson", resumo: "Criar o Imposto Único Federal (IUF) sobre movimentações financeiras, substituindo tributos sobre produção e faturamento, e elevar a isenção do IRPF para 5 salários mínimos." },
    { candidatoId: "clariana", resumo: "Fomento ao cooperativismo (BCOO), economia distribuída e comunidades empreendedoras no agro (Agroindústria Brasil)." },
    { candidatoId: "edmilson", resumo: "Estatização do sistema financeiro, criação do Banco dos Trabalhadores, Petrobras 100% estatal, fim do arcabouço fiscal, revogação da autonomia do Banco Central e auditoria da dívida." },
    { candidatoId: "hertz", resumo: "Estatizar e expropriar empresas e setores estratégicos como Petrobras, Vale, energia e mineração, além de taxar lucros bilionários e controlar o sistema financeiro e a fuga de capitais." },
    { candidatoId: "renan", resumo: "Ajuste fiscal rigoroso com contenção de gastos públicos, criação de Zonas Econômicas Especiais e elevação dos investimentos em infraestrutura para 4% do PIB." },
    { candidatoId: "rui", resumo: "Reestatizar empresas privatizadas, estatizar o sistema financeiro, manter Petrobras 100% pública sob controle operário, extinguir a autonomia do BC e anular dívidas públicas." },
    { candidatoId: "samara", resumo: "Planificação democrática e socialista da economia, reindustrialização nacional, reforma agrária e recuperação do controle público de setores estratégicos." },
  ],
  "Segurança": [
    { candidatoId: "lula", resumo: "Fortalecer o Sistema Único de Segurança Pública (SUSP) com foco em inteligência contra o crime organizado, controle de armas e cooperação nas fronteiras." },
    { candidatoId: "flavio", resumo: "Enquadrar facções criminosas como terroristas, reduzir a maioridade penal, reforçar fronteiras com tropas de elite e endurecer o cumprimento de penas." },
    { candidatoId: "caiado", resumo: "Liderança federal na segurança pública com integração de inteligência, proteção de fronteiras, asfixia financeira de facções e milícias." },
    { candidatoId: "zema", resumo: "Enquadrar facções criminosas como organizações terroristas, usar Forças Armadas para retomar territórios dominados e construir presídios de segurança máxima isolados." },
    { candidatoId: "cury", resumo: "Programa Força Alerta Total (FATO) focado na cultura de paz e redução do extremismo polarizado." },
    { candidatoId: "marcal", resumo: "O candidato não registrou plano de governo no TSE." },
    { candidatoId: "wilson", resumo: "Combater o crime organizado com isolamento de lideranças em presídios, asfixia financeira de facções, integração de inteligência e bases de dados." },
    { candidatoId: "clariana", resumo: "Policiamento baseado em dados, monitoramento tecnológico de fronteiras com drones e radares, e asfixia financeira de facções e narcotráfico." },
    { candidatoId: "edmilson", resumo: "Criação da Lei de Responsabilidade Social para garantir recursos a serviços 100% públicos e gratuitos de saúde, educação e transporte, aliada à reforma agrária popular." },
    { candidatoId: "hertz", resumo: "Reorientação da produção agrícola e industrial para o abastecimento interno e fortalecimento dos serviços públicos 100% estatais e gratuitos de saúde, educação e saneamento." },
    { candidatoId: "renan", resumo: "Aplicação do Direito Penal do Inimigo contra o crime organizado, decretação de estado de defesa, aumento de penas e alteração no ciclo das polícias." },
    { candidatoId: "rui", resumo: "Dissolução da Polícia Militar e do aparato repressivo, garantindo amplo direito ao armamento e criação de comitês de autodefesa popular para trabalhadores." },
    { candidatoId: "samara", resumo: "Garantia de emprego para todos os adultos capacitados, erradicação do trabalho infantil e combate ao racismo, machismo e LGBTfobia." },
  ],
  "Saúde": [
    { candidatoId: "lula", resumo: "Fortalecer e modernizar o SUS, recuperando altas coberturas vacinais e assegurando soberania nacional na produção farmacêutica e sanitária." },
    { candidatoId: "flavio", resumo: "Sem proposta específica registrada para este tema." },
    { candidatoId: "caiado", resumo: "Modernização do SUS com foco preventivo, prontuário eletrônico interoperável e hospitais remunerados por qualidade e resultados." },
    { candidatoId: "zema", resumo: "Sem proposta específica registrada para este tema." },
    { candidatoId: "cury", resumo: "Maior telemedicina do mundo (Tele Saúde Brasil), diagnóstico precoce (SEA) e foco intenso em saúde emocional e neuroinclusão." },
    { candidatoId: "marcal", resumo: "O candidato não registrou plano de governo no TSE." },
    { candidatoId: "wilson", resumo: "Implementar o conceito de Saúde Única (humana, animal e ambiental), priorizar a prevenção e fortalecer a atenção primária no SUS." },
    { candidatoId: "clariana", resumo: "Fortalecimento da atenção primária com prevenção, expansão da telemedicina com IA na regulação de filas e avaliação científica para novas tecnologias no SUS." },
    { candidatoId: "edmilson", resumo: "Sem proposta específica registrada para este tema." },
    { candidatoId: "hertz", resumo: "Sem proposta específica registrada para este tema." },
    { candidatoId: "renan", resumo: "Implementação do SUS Fila Zero com triagem por classificação de risco em vez de fila cronológica e integração de inteligência artificial nos atendimentos." },
    { candidatoId: "rui", resumo: "Sem proposta específica registrada para este tema." },
    { candidatoId: "samara", resumo: "Sem proposta específica registrada para este tema." },
  ],
  "Reformas/Justiça": [
    { candidatoId: "lula", resumo: "Sem proposta específica registrada para este tema." },
    { candidatoId: "flavio", resumo: "Realizar reforma do Judiciário limitando o STF como corte puramente constitucional, promover reforma política e combater a censura e o ativismo judicial." },
    { candidatoId: "caiado", resumo: "Sem proposta específica registrada para este tema." },
    { candidatoId: "zema", resumo: "Reduzir a maioridade penal para 16 anos, acabar com o relaxamento de prisão na audiência de custódia para reincidentes e dar autonomia penal aos estados." },
    { candidatoId: "cury", resumo: "Sem proposta específica registrada para este tema." },
    { candidatoId: "marcal", resumo: "O candidato não registrou plano de governo no TSE." },
    { candidatoId: "wilson", resumo: "Sem proposta específica registrada para este tema." },
    { candidatoId: "clariana", resumo: "Modernização do Estado com governo digital integrado, gestão pública orientada a metas e evidências, integridade nas compras e federalismo de resultados." },
    { candidatoId: "edmilson", resumo: "Convocação de Constituinte Popular, extinção do Senado para criação de Parlamento Unicameral, instituição de Conselhos Populares e mecanismo de mandatos revogáveis." },
    { candidatoId: "hertz", resumo: "Sem proposta específica registrada para este tema." },
    { candidatoId: "renan", resumo: "Lei de Responsabilidade Gerencial condicionando elegibilidade a metas de desempenho, e revisão do pacto federativo com redução do número de municípios." },
    { candidatoId: "rui", resumo: "Extinção do STF, eleição direta com mandatos revogáveis para todos os juízes e promotores, revogação da Lei da Ficha Limpa e fortalecimento de um governo operário e camponês." },
    { candidatoId: "samara", resumo: "Sem proposta específica registrada para este tema." },
  ],
  "Trabalho": [
    { candidatoId: "lula", resumo: "Erradicar a pobreza extrema com a expansão do Bolsa Família, ações de segurança alimentar e combate ao endividamento das famílias via Desenrola Brasil." },
    { candidatoId: "flavio", resumo: "Estimular o empreendedorismo e a liberdade contratual do trabalhador sem dependência sindical, facilitando a transição para o mercado formal." },
    { candidatoId: "caiado", resumo: "Manutenção da transferência de renda conectada a qualificação profissional, moradia e inclusão produtiva." },
    { candidatoId: "zema", resumo: "Ampliar delegacias da mulher 24h, expandir as Patrulhas Maria da Penha para monitoramento de agressores e criar Salas Lilás de atendimento humanizado." },
    { candidatoId: "cury", resumo: "Criação de rede integrada de proteção contra a violência a mulheres e priorização da primeira infância com ampliação de vagas em creches." },
    { candidatoId: "marcal", resumo: "O candidato não registrou plano de governo no TSE." },
    { candidatoId: "wilson", resumo: "Eliminar a contribuição previdenciária patronal sobre a folha de pagamento para desonerar a contratação formal, combater a pejotização e incentivar novos empregos." },
    { candidatoId: "clariana", resumo: "Sem proposta específica registrada para este tema." },
    { candidatoId: "edmilson", resumo: "Redução da jornada para 30 horas semanais sem corte salarial, fim da escala 6x1, revogação das reformas trabalhista e previdenciária e salário mínimo baseado no Dieese." },
    { candidatoId: "hertz", resumo: "Fim da escala 6x1, redução da jornada de trabalho sem redução salarial para promover o pleno emprego e combate à precarização de trabalhadores formais e de aplicativos." },
    { candidatoId: "renan", resumo: "Reforma do assistencialismo com substituição do Bolsa Família por frentes de trabalho remuneradas para a população em idade economicamente ativa." },
    { candidatoId: "rui", resumo: "Reduzir a jornada para 35 horas semanais sem corte salarial, reajustar salários com aumento emergencial de 50%, proibir demissões e revogar as reformas trabalhista e previdenciária." },
    { candidatoId: "samara", resumo: "Fim imediato da escala 6x1 e estabelecimento da escala 4x3, reduzindo a jornada sem redução de salários." },
  ],
};
