import styles from "./Logo.module.scss";

export const Logo = () => {
  return (
    <a href="/">
      <div className={styles.logoWrapper}>
        <span className="mobile">
          Swift
          <br />
          Currency
        </span>
        <img width="80px" height="80px" src="src/assets/svg/logo.svg" alt="logo, currency exchange" />
      </div>
    </a>
  );
};
