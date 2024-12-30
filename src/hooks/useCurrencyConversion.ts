import { useState } from "react";
import { RatesProp } from "../types";

export const useCurrencyConversion = (rates: RatesProp[]) => {
  const [valueFrom, setValueFrom] = useState("0");
  const [valueTo, setValueTo] = useState("0");
  const [currencyFrom, setCurrencyFrom] = useState("USD");
  const [currencyTo, setCurrencyTo] = useState("UAH");

  // Find rate for a specific currency
  const findRate = (currency: string): number => {
    const result = rates.find((item) => item.cc === currency);
    return result!.rate;
  };

  // Convert amount from one currency to another
  const convert = (amount: number, from: string, to: string): number => {
    const fromRate = findRate(from);
    const toRate = findRate(to);
    return (amount * fromRate) / toRate;
  };

  // Handle input change and perform conversion
  const handleInputChange = (value: string, source: "from" | "to") => {
    if (source === "from") {
      setValueFrom(value);
      const result = convert(Number(value) || 0, currencyFrom, currencyTo);
      setValueTo(result.toFixed(2));
    } else {
      setValueTo(value);
      const result = convert(Number(value) || 0, currencyTo, currencyFrom);
      setValueFrom(result.toFixed(2));
    }
  };

  // Handle select change and update state
  const handleSelectChange = (currency: string, source: "from" | "to") => {
    if (source === "from") {
      setCurrencyFrom(currency);
      const result = convert(Number(valueFrom) || 0, currency, currencyTo);
      setValueTo(result.toFixed(2));
    } else {
      setCurrencyTo(currency);
      const result = convert(Number(valueFrom) || 0, currencyFrom, currency);
      setValueTo(result.toFixed(2));
    }
  };

  // Handle focus to clear input if the value is "0"
  const handleInputFocus = (source: "from" | "to") => {
    if (source === "from" && valueFrom === "0") {
      setValueFrom("");
    }
    if (source === "to" && valueTo === "0") {
      setValueTo("");
    }
  };

  return {
    valueFrom,
    valueTo,
    currencyFrom,
    currencyTo,
    handleInputChange,
    handleSelectChange,
    handleInputFocus,
  };
};
