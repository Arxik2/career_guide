import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { testData } from "../data/testData";

const TestPage = () => {
  const { id } = useParams<{ id?: string }>();
  const navigate = useNavigate();

  const test = id ? testData[Number(id)] : undefined;

  const [answers, setAnswers] = useState<Record<string, Record<number, string>>>(() => {
    const savedAnswers = localStorage.getItem("answers");
    return savedAnswers ? JSON.parse(savedAnswers) : {};
  });

  useEffect(() => {
    localStorage.setItem("answers", JSON.stringify(answers));
  }, [answers]);

  if (!test) return <h1 className="text-3xl text-red-500">Тест не найден</h1>;

  const handleAnswer = (questionId: number, option: string) => {
    setAnswers((prev) => ({
      ...prev,
      [id as string]: { ...prev[id as string], [questionId]: option },
    }));
  };

  const handleSubmit = () => {
    navigate("/results");
  };

  return (
    <main className="p-8">
      <h1 className="text-4xl font-bold mb-8 text-blue-600">{test.title}</h1>

      {test.questions.map((q) => (
        <div key={q.id} className="mb-8">
          <p className="text-xl font-semibold mb-4">{q.question}</p>
          <div className="space-y-3">
            {q.options.map((option) => (
              <label key={option} className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="radio"
                  name={`question-${q.id}`}
                  value={option}
                  onChange={() => handleAnswer(q.id, option)}
                  className="hidden"
                />
                <span
                  className={`px-6 py-3 rounded-xl transition ${
                    answers[id as string]?.[q.id] === option ? "bg-blue-500 text-white" : "bg-gray-200"
                  }`}
                >
                  {option}
                </span>
              </label>
            ))}
          </div>
        </div>
      ))}

      <button
        onClick={handleSubmit}
        className="mt-8 px-8 py-4 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-shadow shadow-lg"
      >
        ✅ Завершить тест
      </button>
    </main>
  );
};

export default TestPage;
