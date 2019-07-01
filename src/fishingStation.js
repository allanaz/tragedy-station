import React from 'react';
import './App.css';
import { Button, Icon } from 'semantic-ui-react';
import TimeCalculator from './timeCalculator';
import Countdown from './countdown';

class FishingStation extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      fishAmt: 200,
      roundNumber: 1,

    }
  }

  render() {
    return (
      <div>
        <h1>Fishery No. 1</h1>
        <p>
          Welcome Fisherperson.
        </p>
        <Countdown minutes="00" seconds="15" />
      </div>
    );
  }

}

export default FishingStation;
