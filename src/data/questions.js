// src/data/questions.js
// 21 perguntas (7 por nível). Baseado no seu "QUESTIONÁRIO DO JOGO".
// Observação: o PDF pula do 16 para o 18; por isso a pergunta 17 foi criada (Língua).
// Vídeos: ajuste os caminhos conforme os seus MP4 em /public/videos/...

export const LEVELS = [
  { id: "basico", label: "Básico" },
  { id: "intermediario", label: "Intermediário" },
  { id: "avancado", label: "Avançado" },
];

export const QUESTIONS = {
  // ===== NÍVEL BÁSICO (1–7) =====
  basico: [
    {
      id: "B1",
      videoUrl: "/videos/basico/B1.mp4",
      promptPT: "Qual parte do corpo você sente bater?",
      options: [
        { id: "B1A", text: "Coração", correct: true },
        { id: "B1B", text: "Pulmão", correct: false },
        { id: "B1C", text: "Estômago", correct: false },
      ],
    },
    {
      id: "B2",
      videoUrl: "/videos/basico/B2.mp4",
      promptPT: "Qual órgão do corpo que fica na costa e que são dois iguais?",
      options: [
        { id: "B2A", text: "Rins", correct: true },
        { id: "B2B", text: "Olhos", correct: false },
        { id: "B2C", text: "Fígado", correct: false },
      ],
    },
    {
      id: "B3",
      videoUrl: "/videos/basico/B3.mp4",
      promptPT: "Qual órgão do corpo que é responsável pela respiração?",
      options: [
        { id: "B3A", text: "Pulmão", correct: true },
        { id: "B3B", text: "Cérebro", correct: false },
        { id: "B3C", text: "Coração", correct: false },
      ],
    },
    {
      id: "B4",
      videoUrl: "/videos/basico/B4.mp4",
      promptPT: "Qual parte do corpo é responsável pelo nosso pensamento?",
      options: [
        { id: "B4A", text: "Cérebro", correct: true },
        { id: "B4B", text: "Mandíbula", correct: false },
        { id: "B4C", text: "Bexiga", correct: false },
      ],
    },
    {
      id: "B5",
      videoUrl: "/videos/basico/B5.mp4",
      promptPT: "Qual parte do corpo usamos para abraçar?",
      options: [
        { id: "B5A", text: "Braços", correct: true },
        { id: "B5B", text: "Pernas", correct: false },
        { id: "B5C", text: "Nariz", correct: false },
      ],
    },
    {
      id: "B6",
      videoUrl: "/videos/basico/B6.mp4",
      promptPT: "Qual parte do corpo usamos para andar e correr?",
      options: [
        { id: "B6A", text: "Pernas", correct: true },
        { id: "B6B", text: "Braços", correct: false },
        { id: "B6C", text: "Olhos", correct: false },
      ],
    },
    {
      id: "B7",
      videoUrl: "/videos/basico/B7.mp4",
      promptPT: "Qual parte do rosto que se mexe quando a gente mastiga?",
      options: [
        { id: "B7A", text: "Mandíbula", correct: true },
        { id: "B7B", text: "Orelha", correct: false },
        { id: "B7C", text: "Nariz", correct: false },
      ],
    },
  ],

  // ===== NÍVEL INTERMEDIÁRIO (8–14) =====
  intermediario: [
    {
      id: "I1",
      videoUrl: "/videos/intermediario/I1.mp4",
      promptPT: "O que fica dentro do corpo e deixa ele firme, sem ficar mole?",
      options: [
        { id: "I1A", text: "Ossos", correct: true },
        { id: "I1B", text: "Células", correct: false },
        { id: "I1C", text: "Sangue", correct: false },
      ],
    },
    {
      id: "I2",
      videoUrl: "/videos/intermediario/I2.mp4",
      promptPT: "O que é que todos nós temos dentro do corpo, mas que só pode ser visto com microscópio?",
      options: [
        { id: "I2A", text: "Células", correct: true },
        { id: "I2B", text: "Ossos", correct: false },
        { id: "I2C", text: "Braços", correct: false },
      ],
    },
    {
      id: "I3",
      videoUrl: "/videos/intermediario/I3.mp4",
      promptPT: "Qual órgão ajuda o corpo a limpar o sangue e evitar doenças?",
      options: [
        { id: "I3A", text: "Baço", correct: true },
        { id: "I3B", text: "Coração", correct: false },
        { id: "I3C", text: "Bexiga", correct: false },
      ],
    },
    {
      id: "I4",
      videoUrl: "/videos/intermediario/I4.mp4",
      promptPT: "Qual órgão ajuda a limpar a gordura do sangue?",
      options: [
        { id: "I4A", text: "Fígado", correct: true },
        { id: "I4B", text: "Pulmão", correct: false },
        { id: "I4C", text: "Olhos", correct: false },
      ],
    },
    {
      id: "I5",
      videoUrl: "/videos/intermediario/I5.mp4",
      promptPT: "Por onde a comida passa depois do estômago, para transformar em cocô?",
      options: [
        { id: "I5A", text: "Intestino", correct: true },
        { id: "I5B", text: "Coração", correct: false },
        { id: "I5C", text: "Bexiga", correct: false },
      ],
    },
    {
      id: "I6",
      videoUrl: "/videos/intermediario/I6.mp4",
      promptPT: "Qual parte do corpo da mulher onde o bebê cresce quando está na barriga da mãe?",
      options: [
        { id: "I6A", text: "Útero", correct: true },
        { id: "I6B", text: "Bexiga", correct: false },
        { id: "I6C", text: "Rins", correct: false },
      ],
    },
    {
      id: "I7",
      videoUrl: "/videos/intermediario/I7.mp4",
      promptPT: "Qual parte do corpo onde fica guardado o xixi antes de ir ao banheiro?",
      options: [
        { id: "I7A", text: "Bexiga", correct: true },
        { id: "I7B", text: "Fígado", correct: false },
        { id: "I7C", text: "Cérebro", correct: false },
      ],
    },
  ],

  // ===== NÍVEL AVANÇADO (15–21) =====
  avancado: [
    {
      id: "A1",
      videoUrl: "/videos/avancado/A1.mp4",
      promptPT: "Qual parte do corpo da mulher guarda os óvulos, que servem para formar bebês?",
      options: [
        { id: "A1A", text: "Ovário", correct: true },
        { id: "A1B", text: "Útero", correct: false },
        { id: "A1C", text: "Bexiga", correct: false },
      ],
    },
    {
      id: "A2",
      videoUrl: "/videos/avancado/A2.mp4",
      promptPT: "Qual parte do corpo do homem produz os espermatozoides para formar bebês?",
      options: [
        { id: "A2A", text: "Testículos", correct: true },
        { id: "A2B", text: "Rins", correct: false },
        { id: "A2C", text: "Fígado", correct: false },
      ],
    },
    {
      id: "A3",
      videoUrl: "/videos/avancado/A3.mp4",
      promptPT: "Qual parte do corpo usamos para sentir gosto?",
      options: [
        { id: "A3A", text: "Língua", correct: true },
        { id: "A3B", text: "Nariz", correct: false },
        { id: "A3C", text: "Olhos", correct: false },
      ],
    },
    {
      id: "A4",
      videoUrl: "/videos/avancado/A4.mp4",
      promptPT: "Qual órgão utilizamos para ver?",
      options: [
        { id: "A4A", text: "Olhos", correct: true },
        { id: "A4B", text: "Orelha", correct: false },
        { id: "A4C", text: "Boca", correct: false },
      ],
    },
    {
      id: "A5",
      videoUrl: "/videos/avancado/A5.mp4",
      promptPT: "Qual órgão sentimos cheiro?",
      options: [
        { id: "A5A", text: "Nariz", correct: true },
        { id: "A5B", text: "Olhos", correct: false },
        { id: "A5C", text: "Mandíbula", correct: false },
      ],
    },
    {
      id: "A6",
      videoUrl: "/videos/avancado/A6.mp4",
      promptPT: "Por onde entra os alimentos que comemos?",
      options: [
        { id: "A6A", text: "Boca", correct: true },
        { id: "A6B", text: "Nariz", correct: false },
        { id: "A6C", text: "Orelha", correct: false },
      ],
    },
    {
      id: "A7",
      videoUrl: "/videos/avancado/A7.mp4",
      promptPT: "Qual órgão as pessoas surdas colocam o aparelho auditivo?",
      options: [
        { id: "A7A", text: "Orelha", correct: true },
        { id: "A7B", text: "Olhos", correct: false },
        { id: "A7C", text: "Coração", correct: false },
      ],
    },
  ],
};

