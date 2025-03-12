// src/components/tests/CareerTest.tsx
import { useState, useEffect } from "react";

interface Question {
  id: number;
  question: string;
  options: string[];
}

const careerQuestions: Question[] = [
  { id: 1, question: "Вам нравится решать логические задачи?", options: ["Да", "Нет"] },
  { id: 2, question: "Вы предпочитаете работать с людьми?", options: ["Да", "Нет"] },
  { id: 3, question: "Интересуетесь ли вы технологиями?", options: ["Да", "Нет"] },
  { id: 4, question: "Вам важно видеть результат своей работы?", options: ["Да", "Нет"] },
  { id: 5, question: "Любите ли вы анализировать данные?", options: ["Да", "Нет"] },
  { id: 6, question: "Вам нравится творческая деятельность?", options: ["Да", "Нет"] },
  { id: 7, question: "Предпочитаете ли вы самостоятельную работу?", options: ["Да", "Нет"] },
  { id: 8, question: "Интересуетесь ли вы управлением проектами?", options: ["Да", "Нет"] },
  { id: 9, question: "Вы легко адаптируетесь к новым условиям?", options: ["Да", "Нет"] },
  { id: 10, question: "Любите ли вы работать с цифрами?", options: ["Да", "Нет"] },
];

const CareerTest = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});

  useEffect(() => {
    // Загружаем сохранённые ответы
    const savedAnswers = JSON.parse(localStorage.getItem("answers") || "{}");
    if (savedAnswers.career) {
      setAnswers(savedAnswers.career);
    }
  }, []);

  const handleAnswer = (answer: string) => {
    const updatedAnswers = { ...answers, [careerQuestions[currentQuestion].id]: answer };
    setAnswers(updatedAnswers);

    // Сохраняем результаты
    const storedResults = JSON.parse(localStorage.getItem("answers") || "{}");
    const newResults = { ...storedResults, career: updatedAnswers };
    localStorage.setItem("answers", JSON.stringify(newResults));

    // Переход к следующему вопросу
    if (currentQuestion < careerQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      alert("Тест завершён! Результаты сохранены.");
    }
  };

  const progress = ((currentQuestion + 1) / careerQuestions.length) * 100;

  return (
    <div className="p-8 animate-fade-in">
      <h1 className="text-3xl font-bold mb-6 text-blue-600 text-center">
        Тест на выбор карьеры
      </h1>

      {/* Прогресс-бар */}
      <div className="w-full bg-gray-200 rounded-full h-4 mb-8">
        <div
          className="bg-blue-600 h-4 rounded-full transition-all duration-500"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      <div className="bg-white shadow-xl rounded-xl p-6 mb-8">
        <h2 className="text-xl font-semibold mb-6">
          {careerQuestions[currentQuestion].question}
        </h2>
        <div className="space-y-4">
          {careerQuestions[currentQuestion].options.map((option) => (
            <button
              key={option}
              onClick={() => handleAnswer(option)}
              className="w-full py-3 px-6 bg-blue-500 text-white rounded-xl hover:bg-blue-700 transition-transform transform hover:scale-105"
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CareerTest;
