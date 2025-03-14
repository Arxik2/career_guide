// src/data/hollandTest.ts

export interface HollandQuestion {
  question: string;
  options: string[];
}

// Полный список из 42 вопросов для теста Холланда (RIASEC)
export const hollandQuestions: HollandQuestion[] = [
  { question: "Вам нравится работать с инструментами и механизмами?", options: ["Да", "Нет"] },
  { question: "Вы любите решать математические задачи?", options: ["Да", "Нет"] },
  { question: "Вам нравится писать рассказы, стихи или статьи?", options: ["Да", "Нет"] },
  { question: "Вы предпочитаете помогать другим людям?", options: ["Да", "Нет"] },
  { question: "Вам нравится управлять проектами и процессами?", options: ["Да", "Нет"] },
  { question: "Вы любите анализировать данные и находить закономерности?", options: ["Да", "Нет"] },
  { question: "Вы интересуетесь природой и её явлениями?", options: ["Да", "Нет"] },
  { question: "Вам нравится создавать и конструировать что-то новое?", options: ["Да", "Нет"] },
  { question: "Вы любите обсуждать идеи и делиться знаниями?", options: ["Да", "Нет"] },
  { question: "Вам нравится организовывать мероприятия и координировать людей?", options: ["Да", "Нет"] },
  { question: "Вы предпочитаете точность и порядок в работе?", options: ["Да", "Нет"] },
  { question: "Вам нравится экспериментировать и проверять гипотезы?", options: ["Да", "Нет"] },
  { question: "Вы любите работать с животными или растениями?", options: ["Да", "Нет"] },
  { question: "Вам нравится создавать произведения искусства?", options: ["Да", "Нет"] },
  { question: "Вы получаете удовольствие от помощи нуждающимся?", options: ["Да", "Нет"] },
  { question: "Вы чувствуете себя уверенно, принимая решения?", options: ["Да", "Нет"] },
  { question: "Вам нравится анализировать и систематизировать информацию?", options: ["Да", "Нет"] },
  { question: "Вы любите собирать и ремонтировать технику?", options: ["Да", "Нет"] },
  { question: "Вам нравится проводить научные исследования?", options: ["Да", "Нет"] },
  { question: "Вы чувствуете вдохновение при работе с музыкой или театром?", options: ["Да", "Нет"] },
  { question: "Вам нравится общаться с людьми и помогать им?", options: ["Да", "Нет"] },
  { question: "Вы любите руководить командой и брать на себя ответственность?", options: ["Да", "Нет"] },
  { question: "Вы предпочитаете работать с документами и отчетами?", options: ["Да", "Нет"] },
  { question: "Вам нравится заниматься ручным трудом и работать руками?", options: ["Да", "Нет"] },
  { question: "Вы любите разрабатывать новые концепции и идеи?", options: ["Да", "Нет"] },
  { question: "Вы чувствуете удовлетворение, когда помогаете другим решать их проблемы?", options: ["Да", "Нет"] },
  { question: "Вы хотите добиваться успеха в бизнесе и карьере?", options: ["Да", "Нет"] },
  { question: "Вы предпочитаете точность и аккуратность в работе?", options: ["Да", "Нет"] },
  { question: "Вам нравится строить и проектировать здания?", options: ["Да", "Нет"] },
  { question: "Вы получаете удовольствие от создания новых технологий?", options: ["Да", "Нет"] },
  { question: "Вам нравится работать в социальной сфере?", options: ["Да", "Нет"] },
  { question: "Вы чувствуете вдохновение, когда создаете что-то уникальное?", options: ["Да", "Нет"] },
  { question: "Вам нравится достигать поставленных целей и задач?", options: ["Да", "Нет"] },
  { question: "Вы любите проверять и корректировать ошибки в документах?", options: ["Да", "Нет"] },
  { question: "Вы предпочитаете работать с машинами и оборудованием?", options: ["Да", "Нет"] },
  { question: "Вы любите решать логические задачи и головоломки?", options: ["Да", "Нет"] },
  { question: "Вы получаете удовольствие от помощи другим в их развитии?", options: ["Да", "Нет"] },
  { question: "Вам нравится управлять финансами и ресурсами?", options: ["Да", "Нет"] },
  { question: "Вы предпочитаете четкие правила и инструкции?", options: ["Да", "Нет"] },
  { question: "Вы интересуетесь инженерией и технологиями?", options: ["Да", "Нет"] },
  { question: "Вам нравится творческая работа и самовыражение?", options: ["Да", "Нет"] },
  { question: "Вы чувствуете удовлетворение от помощи обществу?", options: ["Да", "Нет"] },
];

// Функция расчёта Holland (RIASEC) результата
export const calculateHollandResult = (answers: Record<number, string>): string => {
  const categories = ["R", "I", "A", "S", "E", "C"];
  const scores: Record<string, number> = categories.reduce((acc, category) => {
    acc[category] = 0;
    return acc;
  }, {} as Record<string, number>);

  const mapping = [
    "R", "I", "A", "S", "E", "C", "R", "I", "A", "S", "E", "C", "R", "I", "A", "S", "E", "C",
    "R", "I", "A", "S", "E", "C", "R", "I", "A", "S", "E", "C", "R", "I", "A", "S", "E", "C",
    "R", "I"
  ];

  Object.entries(answers).forEach(([index, answer]) => {
    if (answer === "Да") {
      scores[mapping[Number(index)]]++;
    }
  });

  return categories.sort((a, b) => scores[b] - scores[a]).join("");
};
