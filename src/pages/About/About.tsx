import "./About.scss";

const About = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <h1>Currency Converter</h1>
        <p>
          This is a currency converter application that allows users to convert between different currencies. The application has a
          header that displays the current exchange rates for USD and EUR with respect to UAH, which is fetched from a public API. The
          application also has a component for currency conversion. Moreover, the application includes an About page rendered on the
          corresponding route.
        </p>

        <h2>Technologies Used:</h2>
        <ul className="list">
          <li>- React</li>
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
