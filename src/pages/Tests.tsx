import { Link } from "react-router-dom";
import { testData } from "../data/testData";

const Tests = () => {
  return (
    <main className="p-8">
      <h1 className="text-4xl font-bold mb-8 text-blue-600">Доступные тесты</h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {Object.entries(testData).map(([id, test]) => (
          <Link
            to={`/tests/${id}`}
            key={id}
            className="p-6 bg-white shadow-lg rounded-2xl border border-gray-200 hover:shadow-xl transition"
          >
            <h2 className="text-2xl font-semibold mb-4">{test.title}</h2>
            <p className="text-gray-700">Пройдите тест и узнайте больше о себе.</p>
          </Link>
        ))}
      </div>
    </main>
  );
};

export default Tests;
