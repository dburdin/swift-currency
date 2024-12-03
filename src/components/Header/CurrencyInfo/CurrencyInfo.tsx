import { useEffect, useState } from "react";

import { CurrencyApiProp } from "../../../types/types";

import "./currency-info.scss";

export const CurrencyInfo = ({ currenciesInfo }: { currenciesInfo: CurrencyApiProp[] }) => {
  const [headerCurrencies, setHeaderCurrencies] = useState<CurrencyApiProp[]>([]);

  useEffect(() => {
    // const currenciesInfo = JSON.parse(localStorage.getItem("currenciesInfo") || "[]");
    const filteredCurrencies = currenciesInfo.filter((currency: CurrencyApiProp) => currency.cc === "USD" || currency.cc === "EUR");
    setHeaderCurrencies(filteredCurrencies);
  }, [currenciesInfo]);

  return (
    <ul className="currency-info">
      {headerCurrencies.map((currency) => (
        <li key={currency.cc} className="currency-info-item">
          <span className="accent-color">{currency.cc}</span> {currency.rate.toFixed(2)}
          <span className="accent-color mobile">||</span> <span className="mobile">On:</span>
          <span className="accent-color mobile">{currency.exchangedate}</span>
        </li>
      ))}
    </ul>
  );
};
