import React from 'react';
import logo from './logo.svg';
import TimeCalculator from './timeCalculator.js';
import Countdown from './countdown';
import FishingStation from './fishingStation';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <FishingStation />
      </header>
    </div>
  );
}

export default App;
