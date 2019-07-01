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

  updateFishAmount = (numFishTaken) => {
    let newAmt = this.state.fishAmt - numFishTaken
    this.setState({fishAmt: newAmt})
  }

  render() {
    return (
      <div>
        <h1>Fishery No. 1</h1>
        <p>
          Welcome Fisherperson. This fishery has {this.state.fishAmt} fish.
        </p>
        <TimeCalculator numFish={this.state.fishAmt} onTimerStop={this.updateFishAmount} />
      </div>
    );
  }

}

export default FishingStation;
