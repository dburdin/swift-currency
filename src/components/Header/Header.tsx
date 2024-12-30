import { Loader } from "../Loader";
import { CurrencyInfo } from "./CurrencyInfo";
import { Navigation } from "./Navigation";
import { Logo } from "./Logo";

import { RatesProp } from "../../types";

import styles from "./Header.module.scss";

export const Header = ({ isLoading, rates }: { isLoading: boolean; rates: RatesProp[] }) => {
  return (
    <header className={styles.header}>
      <div className="global-container">
        <div className={styles.headerWrapper}>
          <Logo />
          <Navigation />
          {isLoading ? <Loader /> : <CurrencyInfo rates={rates} />}
        </div>
      </div>
    </header>
  );
};
