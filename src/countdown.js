import React from 'react';
import './App.css';
import { Button, Icon } from 'semantic-ui-react';

function Countdown(props) {

  const {minutes, seconds } = props;

  const divStyle = {
    fontSize: '150px'
  };
  return (
    <div>
      <h1 style={divStyle}>{minutes} : {seconds}</h1>
    </div>
    );
}

export default Countdown;
