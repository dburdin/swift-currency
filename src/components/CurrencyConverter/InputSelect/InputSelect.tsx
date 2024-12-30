import { useState } from "react";
import { RatesProp } from "../../../types";

import styles from "./InputSelect.module.scss";

export const InputSelect = ({
  rates,
  selectValue,
  inputValue,
  handleInput,
  handleSelect,
  handleFocus,
  disabledOption,
}: {
  rates: RatesProp[];
  selectValue: string;
  inputValue: string;
  handleInput: (value: string) => void;
  handleSelect: (value: string) => void;
  handleFocus: () => void;
  disabledOption: string;
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const selectOption = (value: string) => {
    if (value !== disabledOption) {
      handleSelect(value);
      setIsDropdownOpen(false);
    }
  };

  const hotOptions = rates.filter((rate) => ["UAH", "USD", "EUR"].includes(rate.cc));

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const isNumber = /^[0-9]$/.test(e.key);

    if (!isNumber && e.key !== "Backspace") {
      e.preventDefault();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
  };

  return (
    <>
      <div className={styles.select}>
        <button type="button" className={styles.selectButton} onClick={toggleDropdown}>
          <span className={styles.selectValue}>{selectValue}</span>
        </button>
        <div className={`${styles.dropdown} ${isDropdownOpen ? styles.show : ""}`}>
          <ul className={styles.dropdownList} role="listbox">
            {rates.map((option) => (
              <li
                key={option.cc}
                className={`${selectValue === option.cc ? styles.selected : ""} ${
                  disabledOption === option.cc ? styles.disabled : ""
                }`}
                onClick={() => selectOption(option.cc)}
                role="option"
              >
                {option.cc}
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.hotOptions}>
          {hotOptions.map((option) => (
            <button
              key={option.cc}
              type="button"
              className={`${styles.hotOption} ${selectValue === option.cc ? styles.selected : ""} ${
                disabledOption === option.cc ? styles.disabled : ""
              }`}
              onClick={() => selectOption(option.cc)}
            >
              {option.cc}
            </button>
          ))}
        </div>
      </div>
      <input
        className={styles.input}
        inputMode="numeric"
        type="text"
        value={inputValue}
        onKeyDown={handleKeyDown}
        onPaste={handlePaste}
        onChange={(e) => handleInput(e.target.value)}
        onFocus={handleFocus}
      />
    </>
  );
};
