// src/pages/ResultsPage.tsx

import { useEffect, useState } from "react";
import { testData } from "../data/testData";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

const ResultsPage = () => {
  const [answers, setAnswers] = useState<Record<string, Record<number, string>>>({});

  useEffect(() => {
    const savedAnswers = localStorage.getItem("answers");
    if (savedAnswers) {
      setAnswers(JSON.parse(savedAnswers));
    }
  }, []);

  const handleReset = () => {
    localStorage.removeItem("answers");
    setAnswers({});
  };

  const downloadPDF = async () => {
    const element = document.getElementById("results-content");
    if (!element) return;

    const canvas = await html2canvas(element);
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF();
    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("results.pdf");
  };

  return (
    <main className="p-8 animate-fade-in">
      <h1 className="text-3xl font-bold mb-8 text-blue-600 text-center">Ваши результаты</h1>
      {Object.keys(answers).length === 0 ? (
        <p className="text-gray-600 animate-pulse">Здесь будут отображаться ваши результаты после прохождения тестов.</p>
      ) : (
        <div id="results-content">
          {Object.entries(answers).map(([testId, userAnswers]) => (
            <div key={testId} className="mb-8 p-6 bg-white shadow-lg rounded-xl hover:shadow-xl transition-transform transform hover:-translate-y-1">
              <h2 className="text-2xl font-semibold mb-4 text-blue-500">{testData[Number(testId)]?.title}</h2>
              {testData[Number(testId)]?.questions.map((question) => (
                <p key={question.id} className="mb-2">
                  <strong>{question.question}</strong>: {userAnswers[question.id] || "Не отвечено"}
                </p>
              ))}
            </div>
          ))}
        </div>
      )}
      {Object.keys(answers).length > 0 && (
        <div className="flex space-x-4 mt-8">
          <button
            onClick={downloadPDF}
            className="px-6 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-transform transform hover:scale-105"
          >
            Скачать PDF
          </button>
          <button
            onClick={handleReset}
            className="px-6 py-3 bg-red-600 text-white rounded-xl hover:bg-red-700 transition-transform transform hover:scale-105"
          >
            Сбросить результаты
          </button>
        </div>
      )}
    </main>
  );
};

export default ResultsPage;
