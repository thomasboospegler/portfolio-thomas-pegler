import React, { useEffect, useState } from 'react';
import Aos from 'aos';
import {
  MyToolbox,
  HeroSection,
  Projects,
  EmailFixed,
  SocialsFixed,
  Footer,
} from './components';
import PortfolioProvider from './provider/PortfolioProvider';
import './styles/App.css';
import 'aos/dist/aos.css';
import InitialLoadingScreen from './components/InitialLoadingScreen';

export default function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    Aos.init({ duration: 800 });
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return loading ? (
    <InitialLoadingScreen />
  ) : (
    <PortfolioProvider>
      <SocialsFixed />
      <EmailFixed />
      <HeroSection />
      <MyToolbox />
      <Projects />
      <Footer />
    </PortfolioProvider>
  );
}
