import { Link } from "react-router-dom";
import styles from "./Navagation.module.scss";

export const Navigation = () => {
  return (
    <ul className={styles.navbar}>
      <li>
        <Link to="/" className={styles.navlink}>
          Home
        </Link>
      </li>
      <li>
        <Link to="/about" className={styles.navlink}>
          About
        </Link>
      </li>
    </ul>
  );
};
