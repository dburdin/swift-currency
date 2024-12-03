import "./logo.scss";

export const Logo = () => {
  return (
    <a href="/">
      <div className="logo-wrapper">
        <span className="logo-text mobile">
          Swift
          <br />
          Currency
        </span>
        <img width="80px" height="80px" src="src/assets/svg/logo.svg" alt="logo, currency exchange" />
      </div>
    </a>
  );
};
