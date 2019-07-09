import React from 'react';
import './App.css';
import { Button, Form, Modal, Icon } from 'semantic-ui-react';
import Countdown from './countdown'

class TimeCalculator extends React.Component {
  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
    this.state = {
      numFishRequested: null,
      fishingTime: 0,
      timerTime: 0,
      timerOpen: false
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
    this.props.onTimerStop(Math.floor((this.state.fishingTime-this.state.timerTime)/this.state.fishingTime*this.state.numFishRequested));

  }

  closeTimer = () => {
    clearInterval(this.timer);
    this.setState({timerOpen: false});
  }

  handleChange = (e) => {
    this.setState({numFishRequested: e.target.value})
  }

  // have amount left be passed down as a prop
  calculateTime = (speed) => {
    const numFish = this.props.numFish;
    const fisherySize = 100;
    const time = Math.round(this.state.numFishRequested/(speed * numFish / fisherySize))
    this.setState({fishingTime: time, timerTime: time, timerOpen: true})
    this.startTimer();
  }

  render() {
    let fish = Math.floor((this.state.fishingTime-this.state.timerTime)/this.state.fishingTime*this.state.numFishRequested);
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
          <Button.Group>
            <Button onClick={() => this.calculateTime(1)}>Small</Button>
            <Button onClick={() => this.calculateTime(2)}>Medium</Button>
            <Button onClick={() => this.calculateTime(3)}>Large</Button>
          </Button.Group>
          <Modal basic
             closeOnEscape={false}
             closeOnDimmerClick={false}
             open={this.state.timerOpen}>
            <Modal.Content>
            <Countdown minutes="00" seconds={this.state.timerTime}/>
            <h1>You've caught {fish} fish in {
                this.state.fishingTime - this.state.timerTime} seconds</h1>
            </Modal.Content>
            <Modal.Actions>
              <Button color='orange' inverted onClick={this.stopTimer}>
                <Icon name='x' /> Stop Fishing
              </Button>
              <Button color='red' inverted onClick={this.closeTimer}>
                <Icon name='x' /> Close
              </Button>
            </Modal.Actions>
          </Modal>
        </Form>
      </div>
    );
  }
}

export default TimeCalculator;
