import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Полный список вопросов
const hollandQuestions = [
  "Мне нравится работать с инструментами.",
  "Люблю решать головоломки.",
  "Предпочитаю помогать людям.",
  "Интересуюсь наукой.",
  "Мне нравится заниматься творчеством.",
  "Часто беру на себя инициативу.",
  "Предпочитаю работать с техникой.",
  "Люблю анализировать данные.",
  "Мне нравится заботиться о других.",
  "Интересуюсь исследованиями.",
  "Креативность важна для меня.",
  "Люблю организовывать мероприятия.",
  "Мне нравится работать руками.",
  "Решение сложных задач захватывает меня.",
  "Я наслаждаюсь общением с людьми.",
  "Интересуюсь естественными науками.",
  "Мне нравится создавать что-то новое.",
  "Легко беру на себя лидерство.",
  "Люблю чинить и ремонтировать.",
  "Анализ причин и следствий меня увлекает.",
  "Мне нравится обучать других.",
  "Провожу время за научными исследованиями.",
  "Я творческий человек.",
  "Люблю руководить командами.",
  "Интересуюсь инженерией.",
  "Логическое мышление — моя сильная сторона.",
  "Забочусь о благополучии людей.",
  "Люблю экспериментировать.",
  "Предпочитаю нестандартные решения.",
  "Могу организовать сложный проект.",
];

const HollandTest = () => {
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const navigate = useNavigate();

  // Сохранение результатов
  const saveTestResults = (testName: string, answers: Record<number, string>) => {
    const existingData = JSON.parse(localStorage.getItem("answers") || "{}");
    localStorage.setItem("answers", JSON.stringify({ ...existingData, [testName]: answers }));
  };

  // Обработка ответа
  const handleAnswer = (answer: string) => {
    const updatedAnswers = { ...answers, [currentQuestion + 1]: answer };
    setAnswers(updatedAnswers);

    if (currentQuestion === hollandQuestions.length - 1) {
      saveTestResults("Тест Холланда (RIASEC)", updatedAnswers);
      navigate("/results");
    } else {
      setCurrentQuestion((prev) => prev + 1);
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Тест Холланда (RIASEC)</h1>
      <p className="mb-6">{hollandQuestions[currentQuestion]}</p>

      <div className="space-x-4">
        <button
          onClick={() => handleAnswer("Да")}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          Да
        </button>
        <button
          onClick={() => handleAnswer("Нет")}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
        >
          Нет
        </button>
      </div>
    </div>
  );
};

export default HollandTest;
