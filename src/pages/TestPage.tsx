import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { testData, Test } from "../data/testData";

const TestPage = () => {
  const { testType } = useParams<{ testType: string }>();
  const navigate = useNavigate();
  const currentTest: Test | undefined = testData.find((test) => test.id === testType);

  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (testType) {
      const savedAnswers = localStorage.getItem(`answers_${testType}`);
      if (savedAnswers) {
        setAnswers(JSON.parse(savedAnswers));
      }
    }
  }, [testType]);

  useEffect(() => {
    if (testType) {
      localStorage.setItem(`answers_${testType}`, JSON.stringify(answers));
    }
  }, [answers, testType]);

  if (!currentTest) return <p>Тест не найден.</p>;

  const handleAnswer = (answer: string) => {
    setAnswers((prev) => ({ ...prev, [currentQuestion]: answer }));
    if (currentQuestion < currentTest.questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      setIsComplete(true);
    }
  };

  const handleNextTest = () => {
    navigate("/results");
  };

  const progress = ((currentQuestion + 1) / currentTest.questions.length) * 100;

  return (
    <main className="p-8 max-w-4xl mx-auto animate-fade-in">
      <h1 className="text-3xl font-bold mb-6">{currentTest.title}</h1>

      <div className="mb-4 bg-gray-200 rounded-full h-4">
        <div
          className="bg-blue-600 h-4 rounded-full transition-all"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      {isComplete ? (
        <div className="text-center">
          <p className="text-xl mb-6">Тест завершён!</p>
          <button
            onClick={handleNextTest}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-transform transform hover:scale-105"
          >
            Перейти к результатам
          </button>
        </div>
      ) : (
        <>
          <p className="text-xl mb-4">{currentTest.questions[currentQuestion].question}</p>
          <div className="flex flex-col gap-4">
            {currentTest.questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option)}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-transform transform hover:scale-105"
              >
                {option}
              </button>
            ))}
          </div>
        </>
      )}
    </main>
  );
};

export default TestPage;
