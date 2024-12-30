import styles from "./Footer.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="global-container">
        <div className={styles.footerWrapper}>
          Swift Currency
          <br />
          <span className={styles.label}>© All rights reserved</span>
        </div>
      </div>
    </footer>
  );
};
