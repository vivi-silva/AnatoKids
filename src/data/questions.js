// questions.js

export const LEVELS = [
  { id: "basico", label: "Básico" },
  { id: "intermediario", label: "Intermediário" },
  { id: "avancado", label: "Avançado" },
];

// Remove acentos e deixa em caixa alta (melhor compatibilidade com fontes de datilologia)
const toDati = (text) =>
  text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toUpperCase();

const opt = (id, pt, image, correct) => ({
  id,
  pt,
  dati: toDati(pt),
  image,
  correct,
});

export const QUESTIONS = {
  // ===== NÍVEL BÁSICO =====
  basico: [
    {
      id: "boca",
      videoUrl: "videos/basico/boca.mp4",
      promptPT: "Por onde entra os alimentos que comemos?",
      options: [
        opt("bocaA", "Boca", "images/opcoes/boca.png", true),
        opt("bocaB", "Nariz", "images/opcoes/nariz.png", false),
        opt("bocaC", "Olhos", "images/opcoes/olhos.png", false),
      ],
    },
    {
      id: "braco",
      videoUrl: "videos/basico/braco.mp4",
      promptPT: "Qual parte do corpo usamos para abraçar?",
      options: [
        opt("bracoA", "Braços", "images/opcoes/bracos.png", true),
        opt("bracoB", "Olhos", "images/opcoes/olhos.png", false),
        opt("bracoC", "Nariz", "images/opcoes/nariz.png", false),
      ],
    },
    {
      id: "nariz",
      videoUrl: "videos/basico/nariz.mp4",
      promptPT: "Com qual órgão sentimos cheiro?",
      options: [
        opt("narizA", "Olhos", "images/opcoes/olhos.png", false),
        opt("narizB", "Orelha", "images/opcoes/orelha.png", false),
        opt("narizC", "Nariz", "images/opcoes/nariz.png", true),
      ],
    },
    {
      id: "olhos",
      videoUrl: "videos/basico/olhos.mp4",
      promptPT: "Qual órgão utilizamos para ver?",
      options: [
        opt("olhosA", "Pernas", "images/opcoes/pernas.png", false),
        opt("olhosB", "Olhos", "images/opcoes/olhos.png", true),
        opt("olhosC", "Boca", "images/opcoes/boca.png", false),
      ],
    },
    {
      id: "perna",
      videoUrl: "videos/basico/perna.mp4",
      promptPT: "Qual parte do corpo usamos para andar e correr?",
      options: [
        opt("pernaA", "Braços", "images/opcoes/bracos.png", false),
        opt("pernaB", "Nariz", "images/opcoes/nariz.png", false),
        opt("pernaC", "Pernas", "images/opcoes/pernas.png", true),
      ],
    },
    {
      id: "orelha",
      videoUrl: "videos/basico/orelha.mp4",
      promptPT: "Qual órgão as pessoas surdas colocam o aparelho auditivo?",
      options: [
        opt("orelhaA", "Orelha", "images/opcoes/orelha.png", true),
        opt("orelhaB", "Braços", "images/opcoes/bracos.png", false),
        opt("orelhaC", "Olhos", "images/opcoes/olhos.png", false),
      ],
    },
  ],

  // ===== NÍVEL INTERMEDIÁRIO =====
  intermediario: [
    {
      id: "bexiga",
      videoUrl: "videos/intermediario/bexiga.mp4",
      promptPT:
        "Qual parte do corpo onde fica guardado o xixi antes de ir ao banheiro?",
      options: [
        opt("bexigaA", "Ossos", "images/opcoes/ossos.png", false),
        opt("bexigaB", "Bexiga", "images/opcoes/bexiga.png", true),
        opt("bexigaC", "Nariz", "images/opcoes/nariz.png", false),
      ],
    },
    {
      id: "cerebro",
      videoUrl: "videos/intermediario/cerebro.mp4",
      promptPT: "Qual parte do corpo é responsável pelo nosso pensamento?",
      options: [
        opt("cerebroA", "Coração", "images/opcoes/coracao.png", false),
        opt("cerebroB", "Ossos", "images/opcoes/ossos.png", false),
        opt("cerebroC", "Cérebro", "images/opcoes/cerebro.png", true),
      ],
    },
    {
      id: "coracao",
      videoUrl: "videos/intermediario/coracao.mp4",
      promptPT: "Qual parte do corpo sentimos bater?",
      options: [
        opt("coracaoA", "Braços", "images/opcoes/bracos.png", false),
        opt("coracaoB", "Coração", "images/opcoes/coracao.png", true),
        opt("coracaoC", "Bexiga", "images/opcoes/bexiga.png", false),
      ],
    },
    {
      id: "ossos",
      videoUrl: "videos/intermediario/ossos.mp4",
      promptPT: "O que fica dentro do corpo e deixa ele firme, sem ficar mole?",
      options: [
        opt("ossosA", "Ossos", "images/opcoes/ossos.png", true),
        opt("ossosB", "Pulmão", "images/opcoes/pulmao.png", false),
        opt("ossosC", "Olhos", "images/opcoes/olhos.png", false),
      ],
    },
    {
      id: "ovarios",
      videoUrl: "videos/intermediario/ovarios.mp4",
      promptPT:
        "Qual parte do corpo da mulher guarda os óvulos, que servem para formar bebês?",
      options: [
        opt("ovariosA", "Intestino", "images/opcoes/intestino.png", false),
        opt("ovariosB", "Ovários", "images/opcoes/ovarios.png", true),
        opt("ovariosC", "Bexiga", "images/opcoes/bexiga.png", false),
      ],
    },
    {
      id: "pulmao",
      videoUrl: "videos/intermediario/pulmao.mp4",
      promptPT: "Qual órgão do corpo que é responsável pela respiração?",
      options: [
        opt("pulmaoA", "Útero", "images/opcoes/utero.png", false),
        opt("pulmaoB", "Bexiga", "images/opcoes/bexiga.png", false),
        opt("pulmaoC", "Pulmão", "images/opcoes/pulmao.png", true),
      ],
    },
  ],

  // ===== NÍVEL AVANÇADO =====
  avancado: [
    {
      id: "baco",
      videoUrl: "videos/avancado/baco.mp4",
      promptPT: "Qual órgão ajuda o corpo a limpar o sangue e evitar doenças?",
      options: [
        opt("bacoA", "Ovários", "images/opcoes/ovarios.png", false),
        opt("bacoB", "Baço", "images/opcoes/baco.png", true),
        opt("bacoC", "Bexiga", "images/opcoes/bexiga.png", false),
      ],
    },
    {
      id: "testiculos",
      videoUrl: "videos/avancado/testiculos.mp4",
      promptPT:
        "Qual parte do corpo do homem produz os espermatozoides para formar bebês?",
      options: [
        opt("testiculosA", "Testículos", "images/opcoes/testiculos.png", true),
        opt("testiculosB", "Rins", "images/opcoes/rins.png", false),
        opt("testiculosC", "Fígado", "images/opcoes/figado.png", false),
      ],
    },
    {
      id: "celula",
      videoUrl: "videos/avancado/celula.mp4",
      promptPT:
        "O que é que todos nós temos dentro do corpo, mas que só pode ser visto com microscópio?",
      options: [
        opt("celulaA", "Pulmão", "images/opcoes/pulmao.png", false),
        opt("celulaB", "Útero", "images/opcoes/utero.png", false),
        opt("celulaC", "Células", "images/opcoes/celulas.png", true),
      ],
    },
    {
      id: "figado",
      videoUrl: "videos/avancado/figado.mp4",
      promptPT: "Qual órgão ajuda a limpar a gordura do sangue?",
      options: [
        opt("figadoA", "Fígado", "images/opcoes/figado.png", true),
        opt("figadoB", "Orelha", "images/opcoes/orelha.png", false),
        opt("figadoC", "Rins", "images/opcoes/rins.png", false),
      ],
    },
    {
      id: "intestino",
      videoUrl: "videos/avancado/intestino.mp4",
      promptPT:
        "Por onde a comida passa depois do estômago, para transformar em cocô?",
      options: [
        opt("intestinoA", "Rins", "images/opcoes/rins.png", false),
        opt("intestinoB", "Intestino", "images/opcoes/intestino.png", true),
        opt("intestinoC", "Mandíbula", "images/opcoes/mandibula.png", false),
      ],
    },
    {
      id: "mandibula",
      videoUrl: "videos/avancado/mandibula.mp4",
      promptPT: "Qual parte do rosto que se mexe quando a gente mastiga?",
      options: [
        opt("mandibulaA", "Mandíbula", "images/opcoes/mandibula.png", true),
        opt("mandibulaB", "Baço", "images/opcoes/baco.png", false),
        opt("mandibulaC", "Orelha", "images/opcoes/orelha.png", false),
      ],
    },
    {
      id: "rim",
      videoUrl: "videos/avancado/rim.mp4",
      promptPT: "Qual órgão do corpo que fica na costa e que são dois iguais?",
      options: [
        opt("rimA", "Pulmão", "images/opcoes/pulmao.png", false),
        opt("rimB", "Olhos", "images/opcoes/olhos.png", false),
        opt("rimC", "Rins", "images/opcoes/rins.png", true),
      ],
    },
    {
      id: "utero",
      videoUrl: "videos/avancado/utero.mp4",
      promptPT:
        "Qual parte do corpo da mulher onde o bebê cresce quando está na barriga da mãe?",
      options: [
        opt("uteroA", "Útero", "images/opcoes/utero.png", true),
        opt("uteroB", "Baço", "images/opcoes/baco.png", false),
        opt("uteroC", "Fígado", "images/opcoes/figado.png", false),
      ],
    },
  ],
};