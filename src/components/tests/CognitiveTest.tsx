import { useState } from "react";
import { motion } from "framer-motion";

const questions = [
  { id: 1, question: "Сколько будет 7 + 5?", options: ["10", "12", "14"], correct: "12" },
  { id: 2, question: "Что идёт после буквы 'Г' в алфавите?", options: ["Д", "Е", "Ж"], correct: "Д" },
  { id: 3, question: "Решите: 3 × 4", options: ["9", "12", "16"], correct: "12" },
];

const CognitiveTest = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (answer: string) => {
    if (answer === questions[currentQuestion].correct) {
      setScore((prev) => prev + 1);
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const getResult = () => {
    if (score === questions.length) return "Вы отлично справились!";
    if (score >= 2) return "Хороший результат!";
    return "Попробуйте ещё раз.";
  };

  return (
    <div className="max-w-3xl mx-auto p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
      {!showResult ? (
        <motion.div
          key={questions[currentQuestion].id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold mb-6">{questions[currentQuestion].question}</h2>
          {questions[currentQuestion].options.map((option) => (
            <button
              key={option}
              onClick={() => handleAnswer(option)}
              className="block w-full p-4 my-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              {option}
            </button>
          ))}
        </motion.div>
      ) : (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <h3 className="text-3xl font-bold mb-6">Результат:</h3>
          <p className="text-xl">{getResult()}</p>
        </motion.div>
      )}
    </div>
  );
};

export default CognitiveTest;
