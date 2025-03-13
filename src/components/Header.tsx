// src/components/Header.tsx
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="bg-gray-900 text-white p-6 shadow-md">
      <nav className="flex justify-between items-center max-w-7xl mx-auto">
        <Link to="/" className="text-3xl font-bold">
          Career Guide
        </Link>

        {/* Основные ссылки */}
        <ul className="flex gap-6 text-2xl">
          <li>
            <Link to="/tests" className="hover:underline">Тесты</Link>
          </li>
          <li>
            <Link to="/results" className="hover:underline">Результаты</Link>
          </li>
          <li>
            <Link to="/contacts" className="hover:underline">Контакты</Link>
          </li>
        </ul>
      
      </nav>
    </header>
  );
};

export default Header;
