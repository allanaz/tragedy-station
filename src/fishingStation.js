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

    this.updateFishAmount = this.updateFishAmount.bind(this)
  }

  updateFishAmount = (numFishRequested) => {
    let newAmt = this.fishAmt - numFishRequested
    this.setState({fishAmt: newAmt})
  }

  render() {
    return (
      <div>
        <h1>Fishery No. 1</h1>
        <p>
          Welcome Fisherperson.
        </p>
        <TimeCalculator onTimerStop={this.updateFishAmount} />
        <Countdown minutes="00" seconds="15" />
      </div>
    );
  }

}

export default FishingStation;
