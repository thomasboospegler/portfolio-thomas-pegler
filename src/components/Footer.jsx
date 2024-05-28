/* eslint-disable max-len */
import React, { useContext } from 'react';
import { useMediaQuery } from 'react-responsive';
import { FiLinkedin } from 'react-icons/fi';
import { VscGithubAlt } from 'react-icons/vsc';
import PortfolioContext from '../context/PortfolioContext';
import '../styles/Footer.css';

export default function Footer() {
  const { darkMode } = useContext(PortfolioContext);

  const isMobile = useMediaQuery({ query: '(max-width: 1250px)' });

  return (
    <footer
      className={darkMode ? 'footer-wrapper-dark' : 'footer-wrapper-light'}
      id="footer"
    >
      <span className="html-tag">{'<footer>'}</span>
      <div className="footer-container">
        <h2 className="footer-text">Get In Touch</h2>
        <p className="footer-description">
          Living, learning & leveling up one day at a time.
        </p>
        <a
          className="footer-email"
          href="mailto:tboospegler@gmail.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          Say Hello
        </a>
        {isMobile && (
          <div className="footer-socials">
            <a
              href="https://github.com/thomasboospegler"
              target="_blank"
              rel="noreferrer"
              aria-label="Github"
            >
              <VscGithubAlt />
            </a>
            <a
              href="https://www.linkedin.com/in/thomasboospegler/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FiLinkedin />
            </a>
          </div>
        )}
      </div>
      <span className="html-tag">{'</footer>'}</span>
      <p className="footer-copyright">
        © 2024 Thomas Pegler. All rights reserved.
      </p>
    </footer>
  );
}
