// src/components/AboutProject.tsx
const AboutProject = () => (
    <section className="py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto max-w-auto text-center px-2">
        <h2 className="text-5xl font-bold mb-12 animate-fade-in-down">
          О проекте
        </h2>
        <p className="text-2xl leading-relaxed animate-fade-in-up">
          Наш проект создан для того, чтобы помочь вам найти идеальную профессию,
          соответствующую вашим интересам и личным качествам. Мы используем
          научно-обоснованные методики, такие как{" "}
          <strong>Holland Code (RIASEC)</strong>, <strong>MBTI</strong> и{" "}
          <strong>Big Five</strong>, чтобы дать вам точные и персонализированные
          рекомендации.
        </p>
  
        <div className="mt-16 grid gap-12 md:grid-cols-3 animate-fade-in">
          {[
            {
              title: "🔍 Глубокий анализ",
              description:
                "Наши тесты охватывают все ключевые аспекты личности и профессиональных интересов.",
            },
            {
              title: "📊 Персонализированные результаты",
              description:
                "Вы получаете индивидуальные рекомендации и анализ с возможностью скачивания в PDF.",
            },
            {
              title: "💼 Поддержка карьерного роста",
              description:
                "Мы помогаем вам выбрать карьеру, соответствующую вашим уникальным навыкам и интересам.",
            },
          ].map((item, index) => (
            <div key={index} className="text-left">
              <h3 className="text-3xl font-semibold mb-4">{item.title}</h3>
              <p className="text-lg leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
  
  export default AboutProject;
  