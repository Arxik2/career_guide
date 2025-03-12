// src/components/FAQ.tsx
import { useState } from "react";

const faqData = [
  {
    question: "Как работают ваши тесты?",
    answer:
      "Наши тесты основаны на проверенных психологических методах, таких как Holland Code, MBTI и Big Five. После прохождения вы получите персонализированный отчёт с анализом ваших интересов и рекомендациями по карьере.",
  },
  {
    question: "Сколько времени занимает прохождение теста?",
    answer:
      "Среднее время прохождения теста составляет около 10 минут. После завершения вы получите подробный отчёт и возможность скачать его в формате PDF.",
  },
  {
    question: "Могу ли я пройти тест повторно?",
    answer:
      "Да! Вы можете пройти тесты неограниченное количество раз и сравнивать свои результаты для более глубокого анализа.",
  },
  {
    question: "Ваши услуги бесплатны?",
    answer:
      "Все базовые тесты и отчёты бесплатны. Мы также предлагаем расширенные отчёты с детализированным анализом на платной основе.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto max-w-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-12 animate-fade-in-down">
          Часто задаваемые вопросы
        </h2>
        <div className="space-y-8">
          {faqData.map((item, index) => (
            <div key={index} className="border-b border-gray-300">
              <button
                className="w-full text-left py-6 text-3xl font-semibold flex justify-between items-center focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                {item.question}
                <span>{openIndex === index ? "−" : "+"}</span>
              </button>
              {openIndex === index && (
                <p className="text-xl leading-relaxed animate-fade-in">
                  {item.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
