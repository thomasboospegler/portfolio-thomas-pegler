import React, { useContext } from 'react';
import { FiLinkedin } from 'react-icons/fi';
import { VscGithubAlt } from 'react-icons/vsc';
import PortfolioContext from '../context/PortfolioContext';
import '../styles/SocialsFixed.css';

export default function SocialsFixed() {
  const { darkMode } = useContext(PortfolioContext);

  return (
    <div className={darkMode ? 'socials-fixed-dark' : 'socials-fixed-light'}>
      <div className="socials-icons">
        <a
          href="https://www.linkedin.com/in/thomasboospegler/"
          target="_blank"
          rel="noreferrer"
        >
          <FiLinkedin />
        </a>
        <a href="https://github.com/thomasboospegler" target="_blank" rel="noreferrer">
          <VscGithubAlt />
        </a>
      </div>
      <div className="socials-fixed-line" />
    </div>
  );
}
