import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gray-900 text-white p-4 sm:p-6 shadow-md relative z-50">
      <nav className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Логотип */}
        <Link to="/" className="text-2xl sm:text-3xl font-bold">
          Career Guide
        </Link>

        {/* Кнопка гамбургер-меню для мобильных устройств */}
        <button
          className="sm:hidden text-2xl focus:outline-none z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>

        {/* Основные ссылки */}
        <ul
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } sm:flex flex-col sm:flex-row gap-4 sm:gap-6 text-lg sm:text-2xl absolute sm:static top-16 left-0 w-full sm:w-auto bg-gray-900 sm:bg-transparent p-4 sm:p-0 shadow-md sm:shadow-none`}
        >
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