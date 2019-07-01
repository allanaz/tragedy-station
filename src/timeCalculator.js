import React from 'react';
import './App.css';
import { Button, Form, Modal, Icon } from 'semantic-ui-react';
import Countdown from './countdown'

class TimeCalculator extends React.Component {
  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
    this.calculateTime = this.calculateTime.bind(this)
    this.state = {
      numFishRequested: null,
      fishingTime: 0,
      timerTime: 0
    }
  }

  startTimer = () => {
    this.timer = setInterval(() => {
      this.setState({
        timerTime: this.state.timerTime - 1
      });
      if (this.state.timerTime == 0){
        this.stopTimer();
      }
    }, 1000);
  };

  stopTimer = () => {
    clearInterval(this.timer);
    this.props.onTimerStop(Math.floor((this.state.fishingTime-this.state.timerTime)
      /this.state.fishingTime*this.state.numFishRequested));
  }


  handleChange = (e) => {
    this.setState({numFishRequested: e.target.value})
  }

  // have amount left be passed down as a prop
  calculateTime = (fishLeft, numFishRequested) => {
    const numFish = this.props.numFish; const fisherySize = 100;
    const boatSpeed = 2;
    const time = Math.round(this.state.numFishRequested/(boatSpeed * numFish / fisherySize))
    this.setState({fishingTime: time, timerTime: time})
    this.startTimer();
  }

  render() {
    return (
      <div>
        <Form inverted>
          <Form.Field>
            <label>Enter an amount to fish:</label>
            <input
              placeholder='integers only please'
              value={this.state.numFishRequested}
              onChange={this.handleChange}/>
          </Form.Field>
          <Modal basic trigger={<Button onClick={this.calculateTime}>Fish!</Button>}>
            <Modal.Content>
            <Countdown minutes="00" seconds={this.state.timerTime}/>
            <h1>You get {Math.floor((this.state.fishingTime-this.state.timerTime)
              /this.state.fishingTime*this.state.numFishRequested)} fish</h1>
            </Modal.Content>
            <Modal.Actions>
              <Button color='red' inverted onClick={this.stopTimer}>
                <Icon name='x' /> Stop Fishing
              </Button>
            </Modal.Actions>
          </Modal>
        </Form>
      </div>
    );
  }
}

export default TimeCalculator;
