// src/components/Hero.tsx
import { Link } from "react-router-dom";
import heroImage from "../assets/hero2.jpg";

const Hero = () => (
  <section
    className="relative h-[900px] flex items-center justify-center text-white "
    style={{
      backgroundImage: `url(${heroImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent bg-black bg-opacity-40"></div>
    <div className="relative z-10 text-center animate-fade-in-up">
      <h1 className="text-7xl font-extrabold mb-8 animate-pulse">
        Найди свою идеальную профессию
      </h1>
      <p className="text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
        Открой свой потенциал с нашими научно обоснованными тестами. Мы помогаем
        вам найти путь к успешной карьере и личностному росту.
      </p>
      <Link
        to="/tests"
        className="px-10 py-4 bg-gray-700 rounded-xl hover:bg-blue-700 transition-transform transform hover:scale-110 animate-pulse"
      >
        Начать тест
      </Link>
    </div>
  </section>
);

export default Hero;
