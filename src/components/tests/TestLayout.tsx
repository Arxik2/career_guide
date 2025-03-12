// src/components/tests/TestLayout.tsx
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TestModal from "./TestModal";
import ProgressBar from "./ProgressBar";

interface Question {
  id: number;
  text: string;
  category?: string; // Для теста Холланда
}

interface TestLayoutProps {
  title: string;
  questions: Question[];
  testKey: string; // Уникальный ключ для сохранения результатов
}

const TestLayout = ({ title, questions, testKey }: TestLayoutProps) => {
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  // Загружаем сохранённые ответы
  useEffect(() => {
    const savedAnswers = localStorage.getItem(testKey);
    if (savedAnswers) {
      setAnswers(JSON.parse(savedAnswers));
    }
  }, [testKey]);

  // Сохраняем прогресс в localStorage
  useEffect(() => {
    localStorage.setItem(testKey, JSON.stringify(answers));
  }, [answers, testKey]);

  const handleAnswer = (answer: string) => {
    setAnswers((prev) => ({
      ...prev,
      [questions[currentQuestion].id]: answer,
    }));
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowModal(true);
    }
  };

  const handleReset = () => {
    localStorage.removeItem(testKey);
    setAnswers({});
    setCurrentQuestion(0);
  };

  const handleNextTest = () => {
    navigate("/results");
  };

  return (
    <div className="p-6 max-w-2xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold text-center">{title}</h1>

      <ProgressBar progress={(currentQuestion / questions.length) * 100} />

      <div className="mt-8">
        <p className="text-xl mb-4">{questions[currentQuestion].text}</p>
        <div className="flex space-x-4">
          {["Да", "Нет", "Не уверен"].map((option) => (
            <button
              key={option}
              className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-transform transform active:scale-95"
              onClick={() => handleAnswer(option)}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      {showModal && (
        <TestModal
          onNextTest={handleNextTest}
          onReset={handleReset}
          isOpen={showModal}
        />
      )}
    </div>
  );
};

export default TestLayout;
