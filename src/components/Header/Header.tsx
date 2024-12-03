import { Loader } from "../Loader/Loader";
import { CurrencyInfo } from "./CurrencyInfo/CurrencyInfo";
import { Navigation } from "./Navigation/Navigation";
import { Logo } from "./Logo/Logo";

import { CurrencyApiProp } from "../../types/types";

import "./header.scss";

export const Header = ({ isLoading, currenciesInfo }: { isLoading: boolean; currenciesInfo: CurrencyApiProp[] }) => {
  return (
    <header className="header">
      <div className="global-container">
        <div className="header-wrapper">
          <Logo />
          <Navigation />
          {isLoading ? <Loader /> : <CurrencyInfo currenciesInfo={currenciesInfo} />}
        </div>
      </div>
    </header>
  );
};
