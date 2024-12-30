import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Header } from "./Header";
import { Footer } from "./Footer";

import { getAll } from "../api";
import { CurrencyApiProp } from "../types";

import Home from "../pages/Home";
import About from "../pages/About";

export const App = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [currenciesInfo, setCurrenciesInfo] = useState<CurrencyApiProp[]>([]);

  useEffect(() => {
    const fetchCurrencies = async () => {
      setIsLoading(true);
      try {
        const data = await getAll();
        setCurrenciesInfo(data);
      } catch (error) {
        console.error("Error fetching currencies:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCurrencies();
  }, []);
  ///  adding UAH currency and cutting off unnecessary data
  const rates = [{ cc: "UAH", rate: 1 }, ...currenciesInfo.map((item) => ({ cc: item.cc, rate: item.rate }))];

  return (
    <Router basename="/swift-currency/">
      <Header isLoading={isLoading} rates={rates} />
      <main className="main">
        <Routes>
          <Route path="/" element={<Home rates={rates} />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};
