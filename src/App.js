import './App.css';
import Navbar from './components/Navbar'
import Content from './components/Content';

import { createContext, useState } from 'react';

export const ThemeContext = createContext()

function App() {
  const [statusTheme, setStatusTheme] = useState("Dark")
  return (
    <ThemeContext.Provider value={{ statusTheme, setStatusTheme }}>
      <div>
        <Navbar />
        <Content />
      </div>
    </ThemeContext.Provider>

  );
}

export default App;
