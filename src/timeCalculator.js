import React from 'react';
import './App.css';
import { Button, Form, Modal } from 'semantic-ui-react';

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

  handleChange = (e) => {
    this.setState({numFishRequested: e.target.value})
  }

  // have amount left be passed down as a prop
  calculateTime = (fishLeft, numFishRequested) => {
    this.setState({fishingTime: 10})
  }

  render() {
    return (
      <div>
        <Form>
          <Form.Field>
            <label>Enter an amount to fish:</label>
            <input 
              placeholder='integers only please'
              value={this.state.numFishRequested}
              onChange={this.handleChange}/>
          </Form.Field>
          <Modal trigger={<Button onClick={this.calculateTime}>Fish!</Button>}>
            <Modal.Content>
            {/* <Countdown fishingTime={this.fishingTime}/> */}
            </Modal.Content>
          </Modal>
        </Form>
      </div>
    );
  }
}

export default TimeCalculator;
