import React from 'react';
import './App.css';
import { Button, Icon } from 'semantic-ui-react';
import TimeCalculator from './timeCalculator';
import Countdown from './countdown';

class FishingStation extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      fishAmt: 300,
      roundNumber: 1,
    }

    this.updateFishAmount = this.updateFishAmount.bind(this)
  }

  updateFishAmount = (numFishTaken) => {
    let newAmt = this.state.fishAmt - numFishTaken
    this.setState({fishAmt: newAmt})
  }

  regenerate = () => {
    let regenAmt = Math.floor(2 * this.state.fishAmt)
    this.setState({fishAmt: regenAmt})
  }

  render() {
    return (
      <div>
        <p>
            Welcome Fisherperson.
            <br />
        </p>
        <TimeCalculator numFish={this.state.fishAmt} onTimerStop={this.updateFishAmount} />
        <p className="fishery">
          This fishery has {this.state.fishAmt} fish.
          <br />
          <Button onClick={this.regenerate}>regenerate fish population</Button>
          <br />
          <br />
        </p>
      </div>
    );
  }

}

export default FishingStation;
