import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import { getAll } from "../api/api";
import { CurrencyApiProp } from "../types/types";
import "./app.scss";

export const App = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [currenciesInfo, setCurrenciesInfo] = useState<CurrencyApiProp[]>([]);

  useEffect(() => {
    const fetchCurrencies = async () => {
      setIsLoading(true);
      try {
        const data = await getAll();
        setCurrenciesInfo(data);
        localStorage.setItem("currenciesInfo", JSON.stringify(data));
      } catch (error) {
        console.error("Error fetching currencies:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCurrencies();
  }, []);

  return (
    <Router>
      <Header isLoading={isLoading} currenciesInfo={currenciesInfo} />
      <main className="main">
        <Routes>
          <Route path="/" element={<Home currenciesInfo={currenciesInfo} />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};
