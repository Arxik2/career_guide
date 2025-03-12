import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { testData, StoredAnswers, calculateHollandResult } from "../data/testData";

const ResultsPage = () => {
  const [userAnswers, setUserAnswers] = useState<StoredAnswers>({});
  const navigate = useNavigate();

  useEffect(() => {
    const storedAnswers: StoredAnswers = {};
    testData.forEach((test) => {
      const savedAnswers = localStorage.getItem(`answers_${test.id}`);
      if (savedAnswers) {
        storedAnswers[test.id] = JSON.parse(savedAnswers);
      }
    });
    setUserAnswers(storedAnswers);
  }, []);

  if (Object.keys(userAnswers).length === 0) {
    return <p>Данные некорректны или отсутствуют.</p>;
  }

  const clearResults = () => {
    testData.forEach((test) => localStorage.removeItem(`answers_${test.id}`));
    setUserAnswers({});
    navigate("/");
  };

  const saveAsPDF = async () => {
    const element = document.getElementById("results-content");
    if (!element) return;

    const canvas = await html2canvas(element);
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF();
    pdf.addImage(imgData, "PNG", 10, 10, 180, 0);
    pdf.save("test-results.pdf");
  };

  return (
    <main className="p-8 max-w-4xl mx-auto animate-fade-in">
      <h1 className="text-3xl font-bold mb-6">Ваши результаты</h1>

      <div id="results-content">
        {testData.map((test) => (
          <details key={test.id} className="mb-8 border rounded-lg p-4 shadow-lg">
            <summary className="text-2xl font-semibold cursor-pointer">{test.title}</summary>

            {userAnswers[test.id] ? (
              <div className="mt-4">
                {test.id === "holland" && (
                  <p className="text-blue-600 mb-4">
                    Ваш тип личности: {calculateHollandResult(userAnswers[test.id])}
                  </p>
                )}

                {test.questions.map((question, index) => (
                  <div key={index} className="mb-4">
                    <p className="font-medium">{index + 1}. {question.question}</p>
                    <p className="text-blue-600">{userAnswers[test.id][index] ?? "Не отвечено"}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p>Результаты для этого теста отсутствуют.</p>
            )}
          </details>
        ))}
      </div>

      <div className="flex gap-4 mt-8">
        <button
          onClick={() => navigate("/")}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-transform transform hover:scale-105"
        >
          На главную
        </button>

        <button
          onClick={clearResults}
          className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-transform transform hover:scale-105"
        >
          Сбросить результаты
        </button>

        <button
          onClick={saveAsPDF}
          className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-transform transform hover:scale-105"
        >
          Сохранить в PDF
        </button>
      </div>
    </main>
  );
};

export default ResultsPage;
