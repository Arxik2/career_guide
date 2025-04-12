const Features = () => (
  <section className="py-16 sm:py-24 bg-gray-100 dark:bg-gray-800">
    <div className="container mx-auto px-4 sm:px-6">
      <h2 className="text-3xl sm:text-5xl font-bold text-center mb-12 sm:mb-16 animate-fade-in-down">
        Почему стоит выбрать нас?
      </h2>

      <div className="grid gap-12 sm:gap-16 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 animate-fade-in">
        {[
          {
            icon: "🧠",
            title: "Основано на науке",
            description:
              "Мы используем проверенные психологические методики для точного определения вашей карьерной направленности.",
          },
          {
            icon: "📊",
            title: "Точные результаты",
            description:
              "Наши тесты предоставляют подробные и персонализированные отчёты с анализом ваших сильных сторон.",
          },
          {
            icon: "🌐",
            title: "Глобальный охват",
            description:
              "Тысячи людей по всему миру уже нашли свою карьеру с нашей помощью — попробуйте и вы!",
          },
          {
            icon: "⏱️",
            title: "Быстро и просто",
            description:
              "Пройдите тест за 10 минут и получите рекомендации, которые помогут вам сделать правильный выбор.",
          },
          {
            icon: "💼",
            title: "Поддержка карьеры",
            description:
              "Мы помогаем не только выбрать профессию, но и спланировать карьерный путь.",
          },
          {
            icon: "🔒",
            title: "Конфиденциальность",
            description:
              "Ваши данные защищены и используются исключительно для анализа и предоставления результатов.",
          },
        ].map((item, index) => (
          <div key={index} className="flex items-start gap-4 sm:gap-6">
            <span className="text-4xl sm:text-5xl">{item.icon}</span>
            <div>
              <h3 className="text-2xl sm:text-3xl font-semibold mb-2 sm:mb-4">
                {item.title}
              </h3>
              <p className="text-base sm:text-lg leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Features;