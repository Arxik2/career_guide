import {Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Tests from "./pages/Tests";
import Contacts from "./pages/Contacts";
import NotFound from "./pages/NotFound";
import TestPage from "./pages/TestPage";
import ResultsPage from "./pages/ResultsPage";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tests" element={<Tests />} />
        <Route path="/tests/:id" element={<TestPage />} />
        <Route path="/results" element={<ResultsPage />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
