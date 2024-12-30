import { useCurrencyConversion } from "../../hooks/useCurrencyConversion";
import { RatesProp } from "../../types";
import { InputSelect } from "./InputSelect";
import styles from "./CurrencyConverter.module.scss";

export const CurrencyConverter = ({ rates }: { rates: RatesProp[] }) => {
  const { valueFrom, valueTo, currencyFrom, currencyTo, handleInputChange, handleSelectChange, handleInputFocus } =
    useCurrencyConversion(rates);

  return (
    <div className={styles.formContainer}>
      <h1 className={styles.title}>Currency Converter</h1>
      <form className={styles.form}>
        <div className={styles.inputSelectGroup}>
          <InputSelect
            rates={rates}
            disabledOption={currencyTo}
            selectValue={currencyFrom}
            inputValue={valueFrom}
            handleSelect={(value) => handleSelectChange(value, "from")}
            handleInput={(value) => handleInputChange(value, "from")}
            handleFocus={() => handleInputFocus("from")}
          />
        </div>

        <div className={styles.inputSelectGroup}>
          <InputSelect
            rates={rates}
            disabledOption={currencyFrom}
            selectValue={currencyTo}
            inputValue={valueTo}
            handleSelect={(value) => handleSelectChange(value, "to")}
            handleInput={(value) => handleInputChange(value, "to")}
            handleFocus={() => handleInputFocus("to")}
          />
        </div>
      </form>
    </div>
  );
};
