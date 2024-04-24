import React from 'react';
import './theme.css';
import useLocalStorage from './useLocalStorage.js'

const Theme = () => {

  const [theme, setTheme] = useLocalStorage("theme", "dark");

  const handleToggle = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  console.log(theme);

  return (
    <div className="light-dark-mode" data-theme={theme}>
      <div className="theme-container">
        <p>Hello World !</p>
        <button onClick={handleToggle}>Change Theme</button>
      </div>
    </div>
  );
}
export default Theme;
