import { Link } from "react-router-dom";
import heroImage from "../assets/hero.jpg";

const Hero = () => (
  <section
    className="relative h-[600px] sm:h-[900px] flex items-center justify-center text-white"
    style={{
      backgroundImage: `url(${heroImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent bg-black bg-opacity-40"></div>
    <div className="relative z-10 text-center animate-fade-in-up px-4 sm:px-0">
      <h1 className="text-4xl sm:text-7xl font-extrabold mb-6 sm:mb-8 animate-pulse">
        Найди свою идеальную профессию
      </h1>
      <p className="text-lg sm:text-2xl mb-6 sm:mb-8 max-w-xl sm:max-w-3xl mx-auto leading-relaxed">
        Открой свой потенциал с нашими научно обоснованными тестами. Мы помогаем
        вам найти путь к успешной карьере и личностному росту.
      </p>
      <Link
        to="/tests"
        className="px-6 sm:px-10 py-3 sm:py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 inline-block rounded-xl transition-transform transform hover:scale-110"
      >
        Начать тест
      </Link>
    </div>
  </section>
);

export default Hero;