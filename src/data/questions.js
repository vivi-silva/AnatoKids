// questions.js

export const LEVELS = [
  { id: "basico", label: "Fase 1" },
  { id: "intermediario", label: "Fase 2" },
  { id: "avancado", label: "Fase 3" },
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
      promptPT: "Por onde entram os alimentos que comemos?",
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
      promptPT: "Com qual parte do corpo sentimos cheiro?",
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
    {
      id: "mao",
      videoUrl: "videos/basico/mao.mp4",
      promptPT: "Qual parte do corpo usamos para conversar em Libras?",
      options: [
        opt("maoA", "Mãos", "images/opcoes/mao.png", true),
        opt("maoB", "Braços", "images/opcoes/bracos.png", false),
        opt("maoC", "Olhos", "images/opcoes/olhos.png", false),
      ],
    },
    {
      id: "pe",
      videoUrl: "videos/basico/pe.mp4",
      promptPT: "Em qual parte do corpo usamos tênis?",
      options: [
        opt("peA", "Pernas", "images/opcoes/pernas.png", false),
        opt("peB", "Pés", "images/opcoes/pe.png", true),
        opt("peC", "Nariz", "images/opcoes/nariz.png", false),
      ],
    },
    {
      id: "dente",
      videoUrl: "videos/basico/dente.mp4",
      promptPT: "Qual parte do corpo usamos para mastigar os alimentos?",
      options: [
        opt("denteA", "Mãos", "images/opcoes/orelha.png", false),
        opt("denteB", "Olhos", "images/opcoes/olhos.png", false),
        opt("denteC", "Dentes", "images/opcoes/dente.png", true),
      ],
    },
    {
      id: "cabelo",
      videoUrl: "videos/basico/cabelo.mp4",
      promptPT: "O que temos na cabeça que pode ser curto ou comprido?",
      options: [
        opt("cabeloA", "Cabelo", "images/opcoes/cabelo.png", true),
        opt("cabeloB", "Braços", "images/opcoes/bracos.png", false),
        opt("cabeloC", "Olhos", "images/opcoes/olhos.png", false),
      ],
    },
  ],

  // ===== NÍVEL INTERMEDIÁRIO =====
  intermediario: [
    {
      id: "sangue",
      videoUrl: "videos/intermediario/sangue.mp4",
      promptPT:
        "Qual líquido sai do nosso corpo se fizermos um corte ou cairmos?",
      options: [
        opt("sangueA", "Ossos", "images/opcoes/ossos.png", false),
        opt("sangueB", "Sangue", "images/opcoes/sangue.png", true),
        opt("sangueC", "Cérebro", "images/opcoes/cerebro.png", false),
      ],
    },
    {
      id: "cerebro",
      videoUrl: "videos/intermediario/cerebro.mp4",
      promptPT: "Qual parte é responsável pelo controle das ações de todo o corpo?",
      options: [
        opt("cerebroA", "Baço", "images/opcoes/baco.png", false),
        opt("cerebroB", "Ossos", "images/opcoes/ossos.png", false),
        opt("cerebroC", "Cérebro", "images/opcoes/cerebro.png", true),
      ],
    },
    {
      id: "figado",
      videoUrl: "videos/intermediario/figado.mp4",
      promptPT: "Qual órgão ajuda a processar a gordura do corpo?",
      options: [
        opt("figadoA", "Baço", "images/opcoes/baco.png", false),
        opt("figadoB", "Fígado", "images/opcoes/figado.png", true),
        opt("figadoC", "Coração", "images/opcoes/coracao.png", false),
      ],
    },
    {
      id: "ossos",
      videoUrl: "videos/intermediario/ossos.mp4",
      promptPT: "O que fica dentro do corpo e deixa ele firme, sem ficar mole?",
      options: [
        opt("ossosA", "Ossos", "images/opcoes/ossos.png", true),
        opt("ossosB", "Intestino", "images/opcoes/intestino.png", false),
        opt("ossosC", "Mandíbula", "images/opcoes/mandibula.png", false),
      ],
    },
    {
      id: "utero",
      videoUrl: "videos/intermediario/utero.mp4",
      promptPT:
        "Em qual parte do corpo da mulher o bebê cresce durante a gestação?",
      options: [
        opt("uteroA", "Intestino", "images/opcoes/intestino.png", false),
        opt("uteroB", "Útero", "images/opcoes/utero.png", true),
        opt("uteroC", "Veias e Artérias", "images/opcoes/veias.png", false),
      ],
    },
    {
      id: "baco",
      videoUrl: "videos/intermediario/baco.mp4",
      promptPT: "Qual órgão ajuda o corpo a limpar o sangue e combater doenças?",
      options: [
        opt("bacoA", "Útero", "images/opcoes/utero.png", false),
        opt("bacoB", "Célula", "images/opcoes/celulas.png", false),
        opt("bacoC", "Baço", "images/opcoes/baco.png", true),
      ],
    },
    {
      id: "celula",
      videoUrl: "videos/intermediario/celula.mp4",
      promptPT: "O que forma nossos órgãos e tecidos e só podemos ver com a ajuda do microscópio?",
      options: [
        opt("celulaA", "Veias e Artérias", "images/opcoes/veias.png", false),
        opt("celulaB", "Célula", "images/opcoes/celulas.png", true),
        opt("celulaC", "Baço", "images/opcoes/baco.png", false),
      ],
    },
    {
      id: "veias",
      videoUrl: "videos/intermediario/veias.mp4",
      promptPT: "Onde o sangue circula por todo o corpo?",
      options: [
        opt("veiasA", "Veias e Artérias", "images/opcoes/veias.png", true),
        opt("veiasB", "Célula", "images/opcoes/celulas.png", false),
        opt("veiasC", "Baço", "images/opcoes/baco.png", false),
      ],
    },
    {
      id: "mandibula",
      videoUrl: "videos/intermediario/mandibula.mp4",
      promptPT: "Quando bocejamos qual parte do rosto se movimenta?",
      options: [
        opt("mandibulaA", "Ossos", "images/opcoes/ossos.png", false),
        opt("mandibulaB", "Fígado", "images/opcoes/figado.png", false),
        opt("mandibulaC", "Mandíbula", "images/opcoes/mandibula.png", true),
      ],
    },
    {
      id: "intestino",
      videoUrl: "videos/intermediario/intestino.mp4",
      promptPT: "Por onde a comida passa depois do estômago até se transformar em fezes?",
      options: [
        opt("intestinoA", "Intestino", "images/opcoes/intestino.png", true),
        opt("intestinoB", "Célula", "images/opcoes/celulas.png", false),
        opt("intestinoC", "Baço", "images/opcoes/baco.png", false),
      ],
    },
  ],

  // ===== NÍVEL AVANÇADO =====
  avancado: [
    {
      id: "bexiga",
      videoUrl: "videos/avancado/bexiga.mp4",
      promptPT: "Onde o xixi fica guardado no nosso corpo até termos vontade de ir ao banheiro?",
      options: [
        opt("bexigaA", "Ovários", "images/opcoes/ovarios.png", false),
        opt("bexigaB", "Bexiga", "images/opcoes/bexiga.png", true),
        opt("bexigaC", "Rins", "images/opcoes/rins.png", false),
      ],
    },
    {
      id: "testiculos",
      videoUrl: "videos/avancado/testiculos.mp4",
      promptPT:
        "Qual parte do corpo do homem produz os espermatozoides?",
      options: [
        opt("testiculosA", "Testículos", "images/opcoes/testiculos.png", true),
        opt("testiculosB", "Rins", "images/opcoes/rins.png", false),
        opt("testiculosC", "Pulmão", "images/opcoes/pulmao.png", false),
      ],
    },
    {
      id: "coluna",
      videoUrl: "videos/avancado/coluna.mp4",
      promptPT:
        "Qual parte do corpo é responsável por manter o corpo firme e de pé?",
      options: [
        opt("colunaA", "Pulmão", "images/opcoes/pulmao.png", false),
        opt("colunaB", "Útero", "images/opcoes/utero.png", false),
        opt("colunaC", "Coluna", "images/opcoes/coluna.png", true),
      ],
    },
    {
      id: "coracao",
      videoUrl: "videos/avancado/coracao.mp4",
      promptPT: "Qual parte do corpo você sente bater?",
      options: [
        opt("coracaoA", "Coração", "images/opcoes/coracao.png", true),
        opt("coracaoB", "Músculos", "images/opcoes/musculo.png", false),
        opt("coracaoC", "Rins", "images/opcoes/rins.png", false),
      ],
    },
    {
      id: "costelas",
      videoUrl: "videos/avancado/costelas.mp4",
      promptPT:
        "Com qual parte do corpo protege os órgãos que ficam acima da cintura?",
      options: [
        opt("costelasA", "Rins", "images/opcoes/rins.png", false),
        opt("costelasB", "Costelas", "images/opcoes/costelas.png", true),
        opt("costelasC", "Ovários", "images/opcoes/ovarios.png", false),
      ],
    },
    {
      id: "musculo",
      videoUrl: "videos/avancado/musculo.mp4",
      promptPT: "Qual parte do corpo se desenvolve e fica firme quando fazemos força ou pegamos muito peso?",
      options: [
        opt("musculoA", "Músculos", "images/opcoes/musculo.png", true),
        opt("musculoB", "Pescoço", "images/opcoes/pescoco.png", false),
        opt("musculoC", "Rins", "images/opcoes/rins.png", false),
      ],
    },
    {
      id: "rins",
      videoUrl: "videos/avancado/rins.mp4",
      promptPT: "Quais são os dois órgãos do corpo que ficam dentro da barriga, na altura das costas, e produz o xixi?",
      options: [
        opt("rinsA", "Pulmão", "images/opcoes/pulmao.png", false),
        opt("rinsB", "Ovários", "images/opcoes/ovarios.png", false),
        opt("rinsC", "Rins", "images/opcoes/rins.png", true),
      ],
    },
    {
      id: "ovarios",
      videoUrl: "videos/avancado/ovarios.mp4",
      promptPT:
        "Qual parte do corpo da mulher guarda os óvulos?",
      options: [
        opt("ovariosA", "Ovários", "images/opcoes/ovarios.png", true),
        opt("ovariosB", "Pescoço", "images/opcoes/pescoco.png", false),
        opt("ovariosC", "Testículos", "images/opcoes/testiculos.png", false),
      ],
    },
    {
      id: "pescoco",
      videoUrl: "videos/avancado/pescoco.mp4",
      promptPT: "Qual parte do corpo liga a cabeça ao resto do corpo?",
      options: [
        opt("pescocoA", "Útero", "images/opcoes/utero.png", false),
        opt("pescocoB", "Costelas", "images/opcoes/costelas.png", false),
        opt("pescocoC", "Pescoço", "images/opcoes/pescoco.png", true),
      ],
    },
    {
      id: "pulmao",
      videoUrl: "videos/avancado/pulmao.mp4",
      promptPT: "Qual órgão é responsável pela respiração?",
      options: [
        opt("pulmaoA", "Bexiga", "images/opcoes/bexiga.png", false),
        opt("pulmaoB", "Pulmão", "images/opcoes/pulmao.png", true),
        opt("pulmaoC", "Rins", "images/opcoes/rins.png", false),
      ],
    },
  ],
};