import React, { useContext, useEffect, useState } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { useMediaQuery } from 'react-responsive';
import { Navbar, LightDarkButton } from '.';
import headerLogo from '../assets/images/tbp-logo.png';
import PortfolioContext from '../context/PortfolioContext';
import '../styles/Header.css';

export default function Header() {
  const [scrollDir, setScrollDir] = useState(true);
  const { darkMode } = useContext(PortfolioContext);

  const isScreenMedium = useMediaQuery({ query: '(max-width: 1015px)' });

  useEffect(() => {
    const threshold = 0;
    let lastScrollY = window.pageYOffset;
    let ticking = false;

    const updateScrollDir = () => {
      const scrollY = window.pageYOffset;

      if (Math.abs(scrollY - lastScrollY) < threshold) {
        ticking = false;
        return;
      }
      setScrollDir(!(scrollY > lastScrollY));
      lastScrollY = scrollY > 0 ? scrollY : 0;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, [scrollDir]);

  return (
    <header
      className={darkMode ? 'header-wrapper-dark' : 'header-wrapper-light'}
      style={{
        animation: isScreenMedium
          ? 'none'
          : scrollDir
            ? 'fadeIn 1s forwards'
            : 'fadeOut 1s forwards',
      }}
    >
      <section className="header-container">
        <span className="html-tag">{'<header>'}</span>
        <img
          src={headerLogo}
          alt="tbp logo"
          className="header-logo"
          style={{ cursor: 'pointer' }}
          onClick={() => scroll.scrollTo(0, { duration: '0', delay: '0', smooth: 'true' })}
        />
        <Navbar />
        <LightDarkButton />
        <span className="html-tag">{'</header>'}</span>
      </section>
    </header>
  );
}
