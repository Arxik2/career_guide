// src/components/Reviews.tsx
const Reviews = () => {
    const reviews = [
      {
        name: "Анна К.",
        feedback:
          "Благодаря вашему тесту я смогла понять, какая профессия действительно мне подходит. Очень ценные и точные рекомендации!",
        avatar: "/images/avatar1.png",
      },
      {
        name: "Иван П.",
        feedback:
          "Тесты понятные и интересные! Я получил отчёт с детальным анализом, который помог мне определиться с выбором карьеры.",
        avatar: "/images/avatar2.png",
      },
      {
        name: "Мария С.",
        feedback:
          "Очень удобно, что можно скачать результаты в PDF. Рекомендую всем, кто задумывается о смене профессии.",
        avatar: "/images/avatar3.png",
      },
      {
        name: "Дмитрий Л.",
        feedback:
          "Отличный проект! Понравился научный подход и персонализированные рекомендации.",
        avatar: "/images/avatar4.png",
      },
    ];
  
    return (
      <section className="py-24 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto max-w-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-16 animate-fade-in-down">
            Отзывы пользователей
          </h2>
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 animate-fade-in">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg transition-transform hover:scale-105"
              >
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-20 h-20 rounded-full mb-6"
                />
                <p className="text-xl italic mb-6">"{review.feedback}"</p>
                <h3 className="text-2xl font-semibold">{review.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Reviews;
  