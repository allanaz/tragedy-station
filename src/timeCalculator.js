import React from 'react';
import './App.css';
import { Button, Form, Modal } from 'semantic-ui-react';
import Countdown from './countdown'

class TimeCalculator extends React.Component {
  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
    this.calculateTime = this.calculateTime.bind(this)
    this.state = {
      numFishRequested: null,
      fishingTime: 0
    }
  }

  startTimer = () => {
    this.timer = setInterval(() => {
      this.setState({
        fishingTime: this.state.fishingTime - 1
      });
      if (this.state.fishingTime == 0){
        clearInterval(this.timer);
      }
    }, 1000);
  };


  handleChange = (e) => {
    this.setState({numFishRequested: e.target.value})
  }

  // have amount left be passed down as a prop
  calculateTime = (fishLeft, numFishRequested) => {
    this.setState({fishingTime: 10})
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
            <Countdown minutes="00" seconds={this.state.fishingTime}/>
            </Modal.Content>
          </Modal>
        </Form>
      </div>
    );
  }
}

export default TimeCalculator;
