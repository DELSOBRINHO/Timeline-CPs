// Dados das comissões permanentes da CLDF
const commissions = [
  {
    id: 1,
    name: "Comissão de Constituição e Justiça",
    acronym: "CCJ",
    color: "#004a8f",
    description: "A Comissão de Constituição e Justiça foi criada pela Resolução nº 19, de 1991 e mantida pela Resolução 167, de 16/11/2000",
    startDate: "18/06/1991",
    endDate: "",
    discovered: false,
    responsibilities: [
      "Analisar a constitucionalidade e juridicidade das proposições",
      "Emitir parecer sobre aspectos constitucionais, legais e jurídicos dos projetos",
      "Zelar pela técnica legislativa e redação das proposições"
    ],
    quiz: [
      {
        question: "Quando foi criada a Comissão de Constituição e Justiça?",
        options: ["1990", "1991", "2000", "2002"],
        answer: 1
      },
      {
        question: "Qual resolução manteve a Comissão de Constituição e Justiça?",
        options: ["Resolução 19", "Resolução 110", "Resolução 167", "Resolução 177"],
        answer: 2
      }
    ]
  },
  {
    id: 2,
    name: "Comissão de Economia, Orçamento e Finanças",
    acronym: "CEOF",
    color: "#0077cc",
    description: "A Comissão de Economia, Orçamento e Finanças foi criada pela Resolução nº 19, de 1991 e mantida pela Resolução 167, de 16/11/200",
    startDate: "18/06/1991",
    endDate: "",
    discovered: false,
    responsibilities: [
      "Analisar o plano plurianual, diretrizes orçamentárias e orçamento anual",
      "Fiscalizar a execução orçamentária e financeira",
      "Analisar matérias tributárias e econômicas"
    ],
    quiz: [
      {
        question: "Qual é a principal função da Comissão de Economia, Orçamento e Finanças?",
        options: ["Fiscalizar obras públicas", "Analisar o orçamento anual", "Julgar processos administrativos", "Organizar eventos culturais"],
        answer: 1
      },
      {
        question: "A CEOF foi uma das primeiras comissões permanentes da CLDF?",
        options: ["Sim", "Não"],
        answer: 0
      }
    ]
  },
  {
    id: 3,
    name: "Comissão de Assuntos Sociais",
    acronym: "CAS",
    color: "#c8a45c",
    description: "A Comissão de Assuntos Sociais foi criada pela Resolução nº 19, de 1991 e mantida pela Resolução 167, de 16/11/200",
    startDate: "18/06/1991",
    endDate: "",
    discovered: false,
    responsibilities: [
      "Analisar matérias relacionadas à assistência social",
      "Discutir políticas públicas de inclusão social",
      "Avaliar programas sociais do Distrito Federal"
    ],
    quiz: [
      {
        question: "Em que ano foi criada a Comissão de Assuntos Sociais?",
        options: ["1990", "1991", "1995", "2000"],
        answer: 1
      },
      {
        question: "Qual resolução manteve a Comissão de Assuntos Sociais?",
        options: ["Resolução 19", "Resolução 110", "Resolução 167", "Resolução 177"],
        answer: 2
      }
    ]
  },
  {
    id: 4,
    name: "Comissão de Defesa dos Direitos Humanos e Cidadania",
    acronym: "CDDHC",
    color: "#9e1b32",
    description: "A Comissão de Defesa dos Direitos Humanos e Cidadania foi criada pela Resolução nº 19, de 1991 e alterada em sua nomecnclatura pela Resolução 167, de 16/11/2000",
    startDate: "18/06/1991",
    endDate: "17/11/2000",
    discovered: false,
    responsibilities: [
      "Defender os direitos humanos e a cidadania",
      "Fiscalizar o cumprimento dos direitos fundamentais",
      "Propor medidas de proteção aos direitos humanos"
    ],
    quiz: [
      {
        question: "Quando foi criada a Comissão de Defesa dos Direitos Humanos e Cidadania?",
        options: ["1991", "1996", "2000", "2002"],
        answer: 0
      },
      {
        question: "Até quando funcionou a Comissão de Defesa dos Direitos Humanos e Cidadania?",
        options: ["1995", "2000", "2002", "Continua ativa"],
        answer: 1
      }
    ]
  },
  {
    id: 5,
    name: "Comissão de Ética e Decoro Parlamentar",
    acronym: "CEDP",
    color: "#58595b",
    description: "A Comissão de Ética e Decoro Parlamentar foi criada pela Resolução nº 110, de 1996",
    startDate: "18/05/1996",
    endDate: "17/11/2000",
    discovered: false,
    responsibilities: [
      "Zelar pela observância dos preceitos éticos",
      "Processar denúncias de falta de decoro parlamentar",
      "Propor medidas disciplinares"
    ],
    quiz: [
      {
        question: "Em que ano foi criada a Comissão de Ética e Decoro Parlamentar?",
        options: ["1991", "1996", "2000", "2002"],
        answer: 1
      },
      {
        question: "Qual resolução criou a Comissão de Ética e Decoro Parlamentar?",
        options: ["Resolução 19", "Resolução 110", "Resolução 167", "Resolução 177"],
        answer: 1
      }
    ]
  },
  {
    id: 6,
    name: "Comissão de Defesa do Consumidor",
    acronym: "CDC",
    color: "#003366",
    description: "A Comissão de Defesa do Consumidor foi criada pela Resolução nº 167, de 2000",
    startDate: "17/11/2000",
    endDate: "",
    discovered: false,
    responsibilities: [
      "Defender os direitos dos consumidores",
      "Fiscalizar a qualidade de produtos e serviços",
      "Propor medidas de proteção ao consumidor"
    ],
    quiz: [
      {
        question: "Quando foi criada a Comissão de Defesa do Consumidor?",
        options: ["1991", "1996", "2000", "2002"],
        answer: 2
      },
      {
        question: "Qual resolução criou a Comissão de Defesa do Consumidor?",
        options: ["Resolução 19", "Resolução 110", "Resolução 167", "Resolução 177"],
        answer: 2
      }
    ]
  },
  {
    id: 7,
    name: "Comissão de Defesa dos Direitos Humanos, Cidadania, Ética e Decoro Parlamentar",
    acronym: "CDDHCEDP",
    color: "#0077cc",
    description: "A Comissão de Defesa dos Direitos Humanos, Cidadania, Ética e Decoro Parlamentar foi criada pela Resolução nº 167, de 2000",
    startDate: "17/11/2000",
    endDate: "14/03/2024",
    discovered: false,
    responsibilities: [
      "Defender os direitos humanos e a cidadania",
      "Zelar pela observância dos preceitos éticos",
      "Processar denúncias de falta de decoro parlamentar"
    ],
    quiz: [
      {
        question: "Esta comissão foi formada pela junção de quais comissões?",
        options: [
          "Comissão de Constituição e Justiça e Comissão de Assuntos Sociais",
          "Comissão de Defesa dos Direitos Humanos e Cidadania e Comissão de Ética e Decoro Parlamentar",
          "Comissão de Economia, Orçamento e Finanças e Comissão de Defesa do Consumidor",
          "Comissão de Educação e Saúde e Comissão de Segurança"
        ],
        answer: 1
      },
      {
        question: "Até quando funcionou esta comissão?",
        options: ["2010", "2015", "2020", "2024"],
        answer: 3
      }
    ]
  },
  {
    id: 8,
    name: "Comissão de Assuntos Fundiários",
    acronym: "CAF",
    color: "#c8a45c",
    description: "A Comissão de Assuntos Fundiários foi criada pela Resolução nº 167, de 2000",
    startDate: "17/11/2000",
    endDate: "",
    discovered: false,
    responsibilities: [
      "Analisar questões relacionadas à regularização fundiária",
      "Discutir políticas de ocupação territorial",
      "Avaliar projetos de parcelamento do solo"
    ],
    quiz: [
      {
        question: "Em que ano foi criada a Comissão de Assuntos Fundiários?",
        options: ["1991", "1996", "2000", "2002"],
        answer: 2
      },
      {
        question: "Qual é a principal atribuição da Comissão de Assuntos Fundiários?",
        options: ["Fiscalizar obras públicas", "Regularização fundiária", "Julgar processos administrativos", "Organizar eventos culturais"],
        answer: 1
      }
    ]
  },
  {
    id: 9,
    name: "Comissão de Educação, Saúde e Segurança",
    acronym: "CESS",
    color: "#9e1b32",
    description: "A Comissão de Educação, Saúde e Segurança foi criada pela Resolução nº 167, de 2000",
    startDate: "17/11/2000",
    endDate: "27/02/2002",
    discovered: false,
    responsibilities: [
      "Analisar políticas educacionais",
      "Discutir questões de saúde pública",
      "Avaliar programas de segurança"
    ],
    quiz: [
      {
        question: "Quando foi criada a Comissão de Educação, Saúde e Segurança?",
        options: ["1991", "1996", "2000", "2002"],
        answer: 2
      },
      {
        question: "Em quais comissões esta comissão foi posteriormente dividida?",
        options: [
          "Comissão de Educação e Saúde e Comissão de Segurança",
          "Comissão de Educação e Comissão de Saúde e Segurança",
          "Comissão de Educação, Saúde e Cultura e Comissão de Segurança",
          "Não foi dividida"
        ],
        answer: 0
      }
    ]
  },
  {
    id: 10,
    name: "Comissão de Educação e Saúde",
    acronym: "CES",
    color: "#58595b",
    description: "A Comissão de Educação e Saúde foi criada pela Resolução nº 177, de 2002",
    startDate: "23/02/2002",
    endDate: "8/2/2011",
    discovered: false,
    responsibilities: [
      "Analisar políticas educacionais",
      "Discutir questões de saúde pública",
      "Avaliar programas educacionais e de saúde"
    ],
    quiz: [
      {
        question: "De qual comissão a Comissão de Educação e Saúde foi desmembrada?",
        options: [
          "Comissão de Constituição e Justiça",
          "Comissão de Assuntos Sociais",
          "Comissão de Educação, Saúde e Segurança",
          "Comissão de Defesa dos Direitos Humanos"
        ],
        answer: 2
      },
      {
        question: "Até quando funcionou a Comissão de Educação e Saúde?",
        options: ["2005", "2008", "2011", "2015"],
        answer: 2
      }
    ]
  },
  {
    id: 11,
    name: "Comissão de Segurança",
    acronym: "CS",
    color: "#003366",
    description: "A Comissão de Segurança foi criada pela Resolução nº 177, de 2002",
    startDate: "23/02/2002",
    endDate: "",
    discovered: false,
    responsibilities: [
      "Analisar políticas de segurança pública",
      "Discutir medidas de prevenção à violência",
      "Avaliar programas de segurança do Distrito Federal"
    ],
    quiz: [
      {
        question: "De qual comissão a Comissão de Segurança foi desmembrada?",
        options: [
          "Comissão de Constituição e Justiça",
          "Comissão de Assuntos Sociais",
          "Comissão de Educação, Saúde e Segurança",
          "Comissão de Defesa dos Direitos Humanos"
        ],
        answer: 2
      },
      {
        question: "Em que ano foi criada a Comissão de Segurança?",
        options: ["2000", "2001", "2002", "2003"],
        answer: 2
      }
    ]
  },
  {
    id: 12,
    name: "Comissão de Desenvolvimento Econômico Sustentável, Ciência, Tecnologia e Meio Ambiente",
    acronym: "CDESCTMA",
    color: "#0077cc",
    description: "A Comissão de Desenvolvimento Econômico Sustentável, Ciência, Tecnologia e Meio Ambiente foi criada pela Resolução nº 219, de 2005",
    startDate: "15/03/2005", 
    endDate: "",
    discovered: false,
    responsibilities: [
      "Analisar políticas de desenvolvimento econômico",
      "Avaliar programas de ciência e tecnologia",
      "Discutir questões ambientais e sustentabilidade",
      "Propor medidas de proteção ao meio ambiente"
    ],
    quiz: [
      {
        question: "Qual resolução criou a Comissão de Desenvolvimento Econômico Sustentável, Ciência, Tecnologia e Meio Ambiente?",
        options: ["217/2005", "218/2005", "219/2005", "220/2005"],
        answer: 2
      },
      {
        question: "Qual é a sigla da Comissão de Desenvolvimento Econômico Sustentável, Ciência, Tecnologia e Meio Ambiente?",
        options: ["CDESCTA", "CDESCTMA", "CDES", "CDEST"],
        answer: 1
      }
    ]
  }]
// Certifique-se de que esta variável seja global
window.commissions = [
  {
    id: 13,
    name: "Comissão de Desenvolvimento Econômico Sustentável, Ciência, Tecnologia, Meio Ambiente e Turismo",
    acronym: "CDESCTMAT",
    color: "#c8a45c",
    description: "Comissão de Desenvolvimento Econômico Sustentável, Ciência, Tecnologia, Meio Ambiente e Turismo",
    startDate: "9/12/2003",
    endDate: "",
    discovered: false,
    responsibilities: [
      "Analisar políticas de desenvolvimento econômico sustentável",
      "Discutir questões de ciência e tecnologia",
      "Avaliar programas de proteção ao meio ambiente",
      "Promover o turismo no Distrito Federal"
    ],
    quiz: [
      {
        question: "Qual elemento foi adicionado à nomenclatura da comissão em 2003?",
        options: ["Sustentabilidade", "Tecnologia", "Turismo", "Ciência"],
        answer: 2
      },
      {
        question: "Qual resolução alterou a nomenclatura desta comissão?",
        options: ["Resolução 181", "Resolução 200", "Resolução 248", "Resolução 261"],
        answer: 1
      }
    ]
  },
  {
    id: 14,
    name: "Comissão de Educação, Saúde e Cultura",
    acronym: "CESC",
    color: "#9e1b32",
    description: "Comissão de Educação, Saúde e Cultura",
    startDate: "3/8/2011",
    endDate: "7/8/2024",
    discovered: false,
    responsibilities: [
      "Analisar políticas educacionais",
      "Discutir questões de saúde pública",
      "Avaliar programas culturais",
      "Promover a cultura no Distrito Federal"
    ],
    quiz: [
      {
        question: "Qual elemento foi adicionado à Comissão de Educação e Saúde em 2011?",
        options: ["Esporte", "Cultura", "Turismo", "Tecnologia"],
        answer: 1
      },
      {
        question: "Até quando funcionou a Comissão de Educação, Saúde e Cultura?",
        options: ["2020", "2022", "2023", "2024"],
        answer: 3
      }
    ]
  },
  {
    id: 15,
    name: "Comissão de Fiscalização, Governança, Transparência e Controle",
    acronym: "CFGTC",
    color: "#58595b",
    description: "A Comissão de Fiscalização, Governança, Transparência e Controle foi criada pela Resolução 261 de 14/01/2013",
    startDate: "15/01/2013",
    endDate: "",
    discovered: false,
    responsibilities: [
      "Fiscalizar atos do Poder Executivo",
      "Promover a transparência na administração pública",
      "Avaliar mecanismos de controle e governança"
    ],
    quiz: [
      {
        question: "Em que ano foi criada a Comissão de Fiscalização, Governança, Transparência e Controle?",
        options: ["2010", "2013", "2015", "2018"],
        answer: 1
      },
      {
        question: "Qual resolução criou esta comissão?",
        options: ["Resolução 248", "Resolução 261", "Resolução 303", "Resolução 336"],
        answer: 1
      }
    ]
  },
  {
    id: 16,
    name: "Comissão de Transporte e Mobilidade Urbana",
    acronym: "CTMU",
    color: "#003366",
    description: "Criação da Comissão de Transporte e Mobilidade Urbana",
    startDate: "14/12/2018",
    endDate: "",
    discovered: false,
    responsibilities: [
      "Analisar políticas de transporte público",
      "Discutir questões de mobilidade urbana",
      "Avaliar projetos de infraestrutura viária"
    ],
    quiz: [
      {
        question: "Quando foi criada a Comissão de Transporte e Mobilidade Urbana?",
        options: ["2010", "2015", "2018", "2020"],
        answer: 2
      },
      {
        question: "Qual resolução criou a Comissão de Transporte e Mobilidade Urbana?",
        options: ["Resolução 261", "Resolução 303", "Resolução 336", "Resolução 341"],
        answer: 1
      }
    ]
  },
  {
    id: 17,
    name: "Comissão de Produção Rural e Abastecimento",
    acronym: "CPRA",
    color: "#0077cc",
    description: "Criação da Comissão de Produção Rural e Abastecimento pela Resolução 336, de 2023",
    startDate: "25/10/2023",
    endDate: "",
    discovered: false,
    responsibilities: [
      "Analisar políticas de produção rural",
      "Discutir questões de abastecimento",
      "Avaliar programas de apoio ao produtor rural"
    ],
    quiz: [
      {
        question: "Em que ano foi criada a Comissão de Produção Rural e Abastecimento?",
        options: ["2020", "2021", "2022", "2023"],
        answer: 3
      },
      {
        question: "Qual resolução criou esta comissão?",
        options: ["Resolução 303", "Resolução 336", "Resolução 341", "Resolução 343"],
        answer: 1
      }
    ]
  },
  {
    id: 18,
    name: "Comissão de Defesa dos Direitos Humanos, Cidadania e Legislação Participativa",
    acronym: "CDDHCLP",
    color: "#c8a45c",
    description: "A Comissão de Defesa dos Direitos Humanos, Cidadania e Legislação Participativa foi criada pela Resolução 341 de 15/03/2024",
    startDate: "16/03/2024",
    endDate: "",
    discovered: false,
    responsibilities: [
      "Defender os direitos humanos e a cidadania",
      "Promover a participação popular no processo legislativo",
      "Avaliar projetos de iniciativa popular"
    ],
    quiz: [
      {
        question: "Qual comissão antecedeu a Comissão de Defesa dos Direitos Humanos, Cidadania e Legislação Participativa?",
        options: [
          "Comissão de Defesa dos Direitos Humanos e Cidadania",
          "Comissão de Defesa dos Direitos Humanos, Cidadania, Ética e Decoro Parlamentar",
          "Comissão de Ética e Decoro Parlamentar",
          "Comissão de Legislação Participativa"
        ],
        answer: 1
      },
      {
        question: "Qual elemento foi adicionado na nova nomenclatura desta comissão em 2024?",
        options: ["Direitos Humanos", "Cidadania", "Legislação Participativa", "Ética"],
        answer: 2
      }
    ]
  },
  {
    id: 19,
    name: "Comissão Permanente do Direito das Mulheres",
    acronym: "CPDM",
    color: "#9e1b32",
    description: "Criação da Comissão Permanente do Direito das Mulheres foi criada pela Resolução 343 de 15/03/2024",
    startDate: "15/03/2024",
    endDate: "15/03/2024",
    discovered: false,
    responsibilities: [
      "Defender os direitos das mulheres",
      "Promover a igualdade de gênero",
      "Combater a violência contra a mulher"
    ],
    quiz: [
      {
        question: "Quando foi criada a Comissão Permanente do Direito das Mulheres?",
        options: ["2022", "2023", "2024", "2025"],
        answer: 2
      },
      {
        question: "Qual resolução criou esta comissão?",
        options: ["Resolução 336", "Resolução 341", "Resolução 343", "Resolução 350"],
        answer: 2
      }
    ]
  },
  {
    id: 20,
    name: "Comissão de Educação e Cultura",
    acronym: "CEC",
    color: "#58595b",
    description: "Comissão de Educação e Cultura renomeada pela Resolução 350, de 2024",
    startDate: "8/8/2024",
    endDate: "",
    discovered: false,
    responsibilities: [
      "Analisar políticas educacionais",
      "Discutir questões culturais",
      "Avaliar programas educacionais e culturais"
    ],
    quiz: [
      {
        question: "De qual comissão a Comissão de Educação e Cultura foi desmembrada?",
        options: [
          "Comissão de Educação e Saúde",
          "Comissão de Educação, Saúde e Cultura",
          "Comissão de Cultura e Esporte",
          "Comissão de Assuntos Sociais"
        ],
        answer: 1
      },
      {
        question: "Em que ano foi criada a Comissão de Educação e Cultura?",
        options: ["2022", "2023", "2024", "2025"],
        answer: 2
      }
    ]
  },
  {
    id: 21,
    name: "Comissão de Saúde",
    acronym: "CS",
    color: "#003366",
    description: "Criação da Comissão de Saúde pela Resolução 350 de 07/08/2024",
    startDate: "8/8/2024",
    endDate: "",
    discovered: false,
    responsibilities: [
      "Analisar políticas de saúde pública",
      "Discutir questões sanitárias",
      "Avaliar programas de saúde do Distrito Federal"
    ],
    quiz: [
      {
        question: "De qual comissão a Comissão de Saúde foi desmembrada?",
        options: [
          "Comissão de Educação e Saúde",
          "Comissão de Educação, Saúde e Cultura",
          "Comissão de Saúde e Segurança",
          "Comissão de Assuntos Sociais"
        ],
        answer: 1
      },
      {
        question: "Em que ano foi criada a Comissão de Saúde?",
        options: ["2022", "2023", "2024", "2025"],
        answer: 2
      }
    ]
  },
  {
    id: 22,
    name: "Comissão de Defesa dos Direitos da Mulher",
    acronym: "CDDM",
    color: "#0077cc",
    description: "Criação da Comissão de Defesa dos Direitos da Mulher",
    startDate: "11/12/2024",
    endDate: "",
    discovered: false,
    responsibilities: [
      "Defender os direitos das mulheres",
      "Promover a igualdade de gênero",
      "Combater a violência contra a mulher"
    ],
    quiz: [
      {
        question: "Qual comissão antecedeu a Comissão de Defesa dos Direitos da Mulher?",
        options: [
          "Comissão Permanente do Direito das Mulheres",
          "Comissão de Defesa dos Direitos Humanos, Cidadania e Legislação Participativa",
          "Comissão de Assuntos Sociais",
          "Nenhuma das anteriores"
        ],
        answer: 0
      },
      {
        question: "Em que ano foi criada a Comissão de Defesa dos Direitos da Mulher?",
        options: ["2022", "2023", "2024", "2025"],
        answer: 2
      }
    ]
  }
];

// Palavras para o caça-palavras
window.wordSearchWords = [
  "COMISSAO",
  "JUSTICA",
  "ECONOMIA",
  "ORCAMENTO",
  "SEGURANCA",
  "CONSUMIDOR",
  "TRANSPORTE",
  "MOBILIDADE",
  "FUNDIARIO",
  "DIREITOS",
  "CIDADANIA",
  "EDUCACAO",
  "SAUDE",
  "CULTURA",
  "MULHER",
  "RURAL",
  "TURISMO",
  "FISCALIZACAO",
  "TRANSPARENCIA",
  "TECNOLOGIA",
  "AMBIENTE"
];

// Inicializar as comissões como não descobertas
window.commissions.forEach(commission => {
  commission.discovered = false;
});