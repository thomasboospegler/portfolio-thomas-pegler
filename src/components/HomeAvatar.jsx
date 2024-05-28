import React, { useContext } from 'react';
import homeLogo from '../assets/images/Code typing-bro.svg';
import PortfolioContext from '../context/PortfolioContext';

export default function HomeAvatar() {
  const { darkMode } = useContext(PortfolioContext);

  return (
    <section className="home-avatar">
      <svg
        viewBox="0 0 500 500"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        id="blobSvg"
        className="home-svg"
      >
        <path
          id="blob"
          d="M445,346.5Q404,443,303.5,450.5Q203,458,123,404Q43,350,83.5,269.5Q124,189,168.5,137.5Q213,86,303.5,77.5Q394,69,440,159.5Q486,250,445,346.5Z"
          fill={darkMode ? '#181818' : '#fefefe'}
        />
      </svg>
      <img
        src={homeLogo}
        alt="programming logo"
        className="programming-avatar"
      />
    </section>
  );
}
