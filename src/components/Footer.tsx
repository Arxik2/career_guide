import { Link } from "react-router-dom";
import { FaTelegramPlane, FaWhatsapp, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-16">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        {/* Логотип и описание */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold text-white">Профориентация</h2>
          <p className="text-gray-400 mt-2">
            Помогаем вам найти идеальную профессию через персонализированные тесты.
          </p>
        </div>

        {/* Навигация */}
        <div className="flex space-x-6">
          <Link to="/" className="hover:text-white transition">Главная</Link>
          <Link to="/tests" className="hover:text-white transition">Тесты</Link>
          <Link to="/results" className="hover:text-white transition">Результаты</Link>
          <Link to="/contacts" className="hover:text-white transition">Контакты</Link>
        </div>

        {/* Социальные сети */}
        <div className="flex space-x-6 text-2xl">
          <a href="https://t.me/yourlink" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
            <FaTelegramPlane />
          </a>
          <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition">
            <FaWhatsapp />
          </a>
          <a href="https://instagram.com/yourpage" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition">
            <FaInstagram />
          </a>
        </div>
      </div>

      {/* Нижняя часть */}
      <div className="text-center text-gray-500 mt-8 text-sm">
        &copy; {new Date().getFullYear()} Все права защищены.
      </div>
    </footer>
  );
};

export default Footer;
