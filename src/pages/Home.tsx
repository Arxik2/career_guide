// src/pages/Home.tsx
import { Helmet } from "react-helmet-async";
import Hero from "../components/Hero";
import Statistics from "../components/Stats";
import Chart from "../components/Chart";
import Reviews from "../components/Reviews";
import CTA from "../components/CTA";
import AboutProject from "../components/AboutProject";
import FAQ from "../components/FAQ";
import Features from "../components/Features";

const Home = () => {
  return (
    <main className="overflow-x-hidden">
      <Helmet>
        <title>Профориентация — Найди свою профессию</title>
        <meta
          name="description"
          content="Интерактивные тесты для помощи в выборе карьеры."
        />
        <link rel="canonical" href="https://your-site.vercel.app/" />
      </Helmet>

      <Hero />
      <AboutProject />
      <Statistics />
      <Chart />
      <Features />
      <CTA />
      <Reviews />
      <FAQ />
      
    </main>
  );
};

export default Home;
