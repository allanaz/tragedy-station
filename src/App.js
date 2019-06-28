import React from 'react';
import logo from './logo.svg';
import TimeCalculator from './timeCalculator.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h1>Fishery No. 1</h1>
        <p>
          Welcome Fisherperson.
        </p>
        <TimeCalculator />
      </header>
    </div>
  );
}

export default App;
