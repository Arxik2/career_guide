// src/pages/Tests.tsx
import { Link } from "react-router-dom";

const Tests = () => (
  <main className="p-8">
    <h1 className="text-3xl font-bold mb-8">Выберите тест</h1>
    <div className="space-y-6">
      <Link
        to="/tests/career"
        className="block px-8 py-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-transform transform hover:scale-105"
      >
        Пройти карьерный тест
      </Link>
      <Link
        to="/tests/personality"
        className="block px-8 py-4 bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition-transform transform hover:scale-105"
      >
        Пройти личностный тест
      </Link>
      <Link
        to="/tests/cognitive"
        className="block px-8 py-4 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-transform transform hover:scale-105"
      >
        Пройти когнитивный тест
      </Link>
      <Link
        to="/tests/holland"
        className="block px-8 py-4 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-transform transform hover:scale-105"
      >
        Определи свои профессиональные склонности
      </Link>
    </div>
  </main>
);

export default Tests;
