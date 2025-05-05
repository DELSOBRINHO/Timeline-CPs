// Dados de exemplo para as comissões
const sampleCommissions = [
  {
    id: 1,
    name: "Comissão de Constituição e Justiça",
    description: "Analisa a constitucionalidade e juridicidade das proposições.",
    start: new Date("1991-01-01"),
    end: null,
    resolution: "Resolução 01/1991",
    modifications: [
      {
        date: new Date("2000-05-15"),
        description: "Ampliação de competências"
      }
    ]
  },
  {
    id: 2,
    name: "Comissão de Economia, Orçamento e Finanças",
    description: "Analisa matérias relacionadas ao orçamento e finanças públicas.",
    start: new Date("1991-01-01"),
    end: null,
    resolution: "Resolução 02/1991",
    modifications: []
  },
  {
    id: 3,
    name: "Comissão de Assuntos Sociais",
    description: "Trata de temas relacionados à saúde, educação e assistência social.",
    start: new Date("1991-01-01"),
    end: null,
    resolution: "Resolução 03/1991",
    modifications: [
      {
        date: new Date("2005-03-10"),
        description: "Divisão em duas comissões distintas"
      }
    ]
  },
  {
    id: 4,
    name: "Comissão de Defesa do Consumidor",
    description: "Protege os direitos dos consumidores e fiscaliza relações de consumo.",
    start: new Date("1995-06-20"),
    end: null,
    resolution: "Resolução 10/1995",
    modifications: []
  },
  {
    id: 5,
    name: "Comissão de Defesa dos Direitos Humanos",
    description: "Promove e defende os direitos humanos no Distrito Federal.",
    start: new Date("1995-06-20"),
    end: null,
    resolution: "Resolução 11/1995",
    modifications: []
  }

];
// Objeto para armazenar o tipo de atividade completada para cada comissão
const activityTypes = {};
