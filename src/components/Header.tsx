// src/components/Header.tsx
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4 shadow-md">
      <nav className="flex justify-between items-center max-w-6xl mx-auto">
        <Link to="/" className="text-2xl font-bold">
          Career Guide
        </Link>
        <ul className="flex gap-6">
          <li>
            <Link to="/tests" className="hover:underline">
              Тесты
            </Link>
          </li>
          <li>
            <Link to="/results" className="hover:underline">
              Результаты
            </Link>
          </li>
          <li>
            <Link to="/contacts" className="hover:underline">
              Контакты
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
