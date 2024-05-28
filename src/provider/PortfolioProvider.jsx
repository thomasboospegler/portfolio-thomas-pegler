import PropTypes from 'prop-types';
import React, { useState } from 'react';
import PortfolioContext from '../context/PortfolioContext';

export default function PortfolioProvider({ children }) {
  const [darkMode, setDarkMode] = useState(true);
  const [seeMoreProjects, setSeeMoreProjects] = useState({
    seeMore: false,
    projectsAmount: 6,
  });

  const CONTEXT_VALUE = {
    darkMode,
    setDarkMode,
    seeMoreProjects,
    setSeeMoreProjects,
  };

  return (
    <PortfolioContext.Provider value={CONTEXT_VALUE}>
      {children}
    </PortfolioContext.Provider>
  );
}

PortfolioProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
