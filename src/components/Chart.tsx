
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { useEffect, useState } from "react";

ChartJS.register(ArcElement, Tooltip, Legend);

const Diagram = () => {
  const [chartData, setChartData] = useState({
    labels: ["Неопределившиеся", "Нашли свою профессию", "В поиске"],
    datasets: [
      {
        data: [20, 65, 35],
        backgroundColor: ["#4F46E5", "#10B981", "#F59E0B"],
        hoverBackgroundColor: ["#4338CA", "#059669", "#D97706"],
        borderWidth: 2,
        borderRadius: 10,
      },
    ],
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setChartData((prev) => ({
        ...prev,
        datasets: [
          {
            ...prev.datasets[0],
            data: prev.datasets[0].data.map(
              (value) => value + Math.floor(Math.random() * 5) - 2
            ),
          },
        ],
      }));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 bg-gradient-to-r from-gray-900 to-indigo-900">
      <div className="container  mx-auto max-w-4xl text-center">
        <h2 className="text-4xl font-bold mb-12 animate-fade-in-down text-white">
          Ситуация на рынке труда
        </h2>
        <div className="flex justify-center ">
          <div className="w-72 h-72 animate-scale-in text-black">
            <Doughnut
              data={chartData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                cutout: "55%",
                plugins: {
                  legend: {
                    position: "bottom",
                    labels: {
                      boxWidth: 20,
                      padding: 20,
                      font: { size: 20 },
                    },
                  },
                },
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Diagram;
