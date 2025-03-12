// src/components/Statistics.tsx
import { useEffect, useState } from "react";

const Statistics = () => {
  const [stats, setStats] = useState({
    usersHelped: 12500,
    careerPaths: 42,
    dailyTests: 350,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setStats((prev) => ({
        usersHelped: prev.usersHelped + Math.floor(Math.random() * 5),
        careerPaths: prev.careerPaths,
        dailyTests: prev.dailyTests + Math.floor(Math.random() * 2),
      }));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const statsData = [
    { label: "Людей нашли своё призвание", value: stats.usersHelped },
    { label: "Карьерных путей в базе", value: stats.careerPaths },
    { label: "Тестов проходят ежедневно", value: stats.dailyTests },
  ];

  return (
    <section className="bg-gray-100 dark:bg-gray-800 py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-5xl font-bold mb-12 animate-fade-in-down">
          Наши достижения
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {statsData.map((item, index) => (
            <div key={index} className="text-5xl animate-bounce">
              <span>{item.value.toLocaleString()}</span>
              <p className="text-xl mt-4">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
