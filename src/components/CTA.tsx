// src/components/CTA.tsx
const CTA = () => (
    <section className="py-24 bg-gradient-to-r  from-gray-900 to-indigo-900 text-white text-center">
      <div className="container mx-auto px-6 ">
        <h2 className="text-6xl font-bold mb-4 animate-fade-in-down">
          Готовы найти свою профессию?
        </h2>
        <p className="text-2xl mb-12 animate-fade-in-up">
          Пройдите наш научно-обоснованный тест и получите персональные
          рекомендации для выбора идеальной карьеры.
        </p>
        <a
          href="/tests"
          className="px-12 py-2 bg-white text-blue-600 text-3xl font-semibold rounded-full shadow-lg hover:scale-105 transition-transform"
        >
          Пройти тест
        </a>
      </div>
    </section>
  );
  
  export default CTA;
  