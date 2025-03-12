import { useState } from "react";
import { motion } from "framer-motion";

const questions = [
  { id: 1, question: "Вы предпочитаете работать в одиночку?", options: ["Да", "Нет"] },
  { id: 2, question: "Вы часто полагаетесь на логику, а не на интуицию?", options: ["Да", "Нет"] },
  { id: 3, question: "Вам легко общаться с незнакомыми людьми?", options: ["Да", "Нет"] },
];

const PersonalityTest = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (answer: string) => {
    setAnswers([...answers, answer]);
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const getResult = () => {
    const positiveAnswers = answers.filter((a) => a === "Да").length;
    if (positiveAnswers >= 2) return "Вы экстраверт.";
    return "Вы интроверт.";
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

export default PersonalityTest;
