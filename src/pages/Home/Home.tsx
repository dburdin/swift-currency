import { RatesProp } from "../../types";

import { CurrencyConverter } from "../../components/CurrencyConverter";

const Home = ({ rates }: { rates: RatesProp[] }) => {
  return (
    <div className="global-container">
      <CurrencyConverter rates={rates} />
    </div>
  );
};

export default Home;
