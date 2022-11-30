import { useContext } from "react";
import { ThemeContext } from "../App";
import dark from "../images/dark.svg";
import light from "../images/light.svg";

export const Content = () => {
    const { statusTheme } = useContext(ThemeContext)
  return (
    <header className={ statusTheme === 'Dark' ? 'dark' : 'light'}>
      <div>
        <h1>Natchapol K Official</h1>
        <h6 style={{ marginTop:'2rem' }}>DarkMode Workshop</h6>
      </div>
      <img src={statusTheme === 'Dark' ? dark : light } alt="Logo" />
    </header>
  );
};

export default Content;
