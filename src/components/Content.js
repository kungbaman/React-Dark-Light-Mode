import dark from "../images/dark.svg";
import light from "../images/light.svg";

export const Content = () => {
  return (
    <header>
      <div>
        <h1>Natchapol K Official</h1>
        <h6 style={{ marginTop:'2rem' }}>DarkMode Workshop</h6>
      </div>
      <img src={light} alt="Logo" />
    </header>
  );
};

export default Content;
