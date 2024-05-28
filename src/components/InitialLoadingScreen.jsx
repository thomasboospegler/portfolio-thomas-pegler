import React from 'react';
import PacmanLoader from 'react-spinners/PacmanLoader';
import '../styles/InitialLoadingScreen.css';

function InitialLoadingScreen() {
  return (
    <div className="loading-screen__container">
      <PacmanLoader color="#36d7b7" size={40}  speedMultiplier={1.3}/>
    </div>
  );
}

export default InitialLoadingScreen;
