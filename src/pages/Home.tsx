import { Link } from "react-router-dom";
import heroImage from "../assets/hero.webp"; // Импорт изображения

const Home = () => {
  return (
    <main>
      {/* Hero Image Section */}
      <section
        className="relative h-[500px] md:h-[600px] flex items-center justify-center text-center text-white"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 p-8 animate-fade-in">
          <h1 className="text-5xl font-bold mb-6">Найди свою профессию мечты</h1>
          <p className="text-lg max-w-xl mx-auto mb-8">
            Пройди тесты и узнай, какая карьера идеально подходит именно тебе.
          </p>
          <Link
            to="/tests"
            className="px-8 py-4 text-white bg-blue-600 rounded-xl hover:bg-blue-700 transition transform hover:scale-105 animate-pulse"
          >
            Начать тест
          </Link>
        </div>
      </section>

      {/* О проекте */}
      <section className="p-8 text-center">
        <h2 className="text-4xl font-semibold mb-8">О проекте</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Мы помогаем вам разобраться в своих интересах и выбрать правильное направление в карьере. Наши тесты помогут узнать ваши сильные стороны и предпочтения.
        </p>
      </section>

      {/* Преимущества */}
      <section className="p-8">
        <h2 className="text-4xl font-semibold mb-12 text-center">Наши преимущества</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {[
            "Индивидуальный подход",
            "Научная методология",
            "Доступно и бесплатно",
          ].map((benefit, index) => (
            <div
              key={index}
              className="p-6 bg-white shadow-lg rounded-xl hover:shadow-xl transition transform hover:scale-105"
            >
              <h3 className="text-2xl font-semibold mb-4">{benefit}</h3>
              <p className="text-gray-700">
                Мы используем современные методики и персонализированный подход к каждому пользователю.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Как это работает? */}
      <section className="p-8 bg-gray-100">
        <h2 className="text-4xl font-semibold mb-12 text-center">Как это работает?</h2>
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {[
            { step: "1", title: "Выберите тест", desc: "Выберите подходящий тест из нашей коллекции." },
            { step: "2", title: "Пройдите тест", desc: "Ответьте на вопросы и узнайте о себе больше." },
            { step: "3", title: "Получите результат", desc: "Получите подробный анализ и рекомендации." },
          ].map((item) => (
            <div key={item.step} className="flex-1 text-center p-6 bg-blue-100 rounded-xl">
              <span className="text-6xl font-bold text-blue-600">{item.step}</span>
              <h3 className="text-2xl font-semibold mt-4 mb-2">{item.title}</h3>
              <p className="text-gray-700">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Отзывы пользователей */}
      <section className="p-8">
        <h2 className="text-4xl font-semibold mb-12 text-center">Отзывы пользователей</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {[
            { name: "Анна", feedback: "Тесты помогли мне понять, какая профессия мне подходит." },
            { name: "Иван", feedback: "Очень полезный ресурс! Теперь я уверен в своём выборе." },
          ].map((review) => (
            <div key={review.name} className="p-6 bg-white shadow-lg rounded-xl">
              <p className="text-lg text-gray-700 mb-4">"{review.feedback}"</p>
              <span className="text-blue-600 font-semibold">— {review.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA с анимацией */}
      <section className="text-center p-8 animate-pulse">
        <h2 className="text-4xl font-semibold mb-6">Готовы начать?</h2>
        <Link
          to="/tests"
          className="px-8 py-4 text-white bg-blue-600 rounded-xl hover:bg-blue-700 transition transform hover:scale-105"
        >
          Пройти тест
        </Link>
      </section>
    </main>
  );
};

export default Home;
