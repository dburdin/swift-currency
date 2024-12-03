import { Link } from "react-router-dom";
import "./navigation.scss";

export const Navigation = () => {
  return (
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
  );
};
