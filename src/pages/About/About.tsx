import styles from "./About.module.scss";

const About = () => {
  return (
    <div className="global-container">
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Currency Converter</h1>
        <p>
          This is a currency converter application that allows users to convert between different currencies. The application has a
          header that displays the current exchange rates for USD and EUR with respect to UAH, which is fetched from a public API. The
          application also has a component for currency conversion. Moreover, the application includes an About page rendered on the
          corresponding route.
        </p>

        <h2 className={styles.title}>Technologies Used:</h2>
        <ul className={styles.list}>
          <li>- React</li>
          <li>- React-Router-Dom</li>
          <li>- React-Hook-Form</li>
          <li>- TypeScript</li>
          <li>- HTML</li>
          <li>- SCSS</li>
          <li>- Public API for currency exchange rates</li>
          <li>- Vercel (for deployment)</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
