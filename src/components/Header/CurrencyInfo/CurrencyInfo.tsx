import { useEffect, useState } from "react";

import { RatesProp } from "../../../types";

import styles from "./CurrencyInfo.module.scss";

export const CurrencyInfo = ({ rates }: { rates: RatesProp[] }) => {
  const [headerCurrencies, setHeaderCurrencies] = useState<RatesProp[]>([]);

  useEffect(() => {
    const filteredCurrencies = rates.filter((currency: RatesProp) => currency.cc === "USD" || currency.cc === "EUR");
    setHeaderCurrencies(filteredCurrencies);
  }, [rates]);

  return (
    <ul className={styles.currencyInfo}>
      {headerCurrencies.map((currency) => (
        <li key={currency.cc} className={styles.currencyInfoItem}>
          <span className={styles.accentColor}>{currency.cc}</span> {currency.rate.toFixed(2)}
          <img src="svg/ukraine-flag-icon.svg" alt="ukraine flag" width={"20px"} />
        </li>
      ))}
    </ul>
  );
};
