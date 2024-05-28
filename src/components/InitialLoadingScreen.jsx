import React from 'react';
import CircleLoader from 'react-spinners/CircleLoader';
import '../styles/InitialLoadingScreen.css';

function InitialLoadingScreen() {
  return (
    <div className="loading-screen__container">
      <CircleLoader color="#9b30f9" size={100} />
    </div>
  );
}

export default InitialLoadingScreen;
