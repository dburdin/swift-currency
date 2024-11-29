import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./header.scss";

import { CurrencyApiProp } from "../../types/types";
import { Loader } from "../Loader/Loader";

export const Header = ({ isLoading, currenciesInfo }: { isLoading: boolean; currenciesInfo: CurrencyApiProp[] }) => {
  const [headerCurrencies, setHeaderCurrencies] = useState<CurrencyApiProp[]>([]);

  useEffect(() => {
    const currenciesInfo = JSON.parse(localStorage.getItem("currenciesInfo") || "[]");
    const filteredCurrencies = currenciesInfo.filter((currency: CurrencyApiProp) => currency.cc === "USD" || currency.cc === "EUR");
    setHeaderCurrencies(filteredCurrencies);
  }, []);

  return (
    <header className="header">
      <div className="container">
        <div className="header-wrapper">
          <a href="/">
            <div className="logo-wrapper">
              <span className="logo-text mobile">
                Currency <br />
                Converter
              </span>
              <img width="80px" height="80px" src="src/assets/svg/logo.svg" alt="logo, currency exchange" />
            </div>
          </a>

          <ul className="navbar">
            <li>
              <Link to="/" className="navlink">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="navlink">
                About
              </Link>
            </li>
          </ul>

          {isLoading ? (
            <Loader />
          ) : (
            <ul className="currency-info">
              {headerCurrencies.map((currency) => (
                <li key={currency.cc} className="currency-info-item">
                  <span className="accent-color">{currency.cc}</span> {currency.rate.toFixed(2)}
                  <span className="accent-color mobile">||</span> <span className="mobile">On:</span>
                  <span className="accent-color mobile">{currency.exchangedate}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </header>
  );
};
