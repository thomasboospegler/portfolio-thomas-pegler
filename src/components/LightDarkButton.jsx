import React, { useContext } from 'react';
import iconMoon from '../assets/images/icon-moon.svg';
import iconSun from '../assets/images/icon-sun.svg';
import PortfolioContext from '../context/PortfolioContext';
import '../styles/LightDarkMode.css';

export default function LightDarkButton() {
  const { darkMode, setDarkMode } = useContext(PortfolioContext);

  return (
    <div className="light-mode-container">
      <button type="button" onClick={() => setDarkMode(!darkMode)}>
        <img
          src={darkMode ? iconSun : iconMoon}
          alt={darkMode ? 'dark mode icon' : 'light mode icon'}
        />
      </button>
    </div>
  );
}
