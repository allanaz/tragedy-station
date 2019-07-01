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
       <h1>Fishery No. 1</h1>
      </header>
      <body className="App-body">
        <FishingStation />
      </body>
    </div>
  );
}

export default App;
