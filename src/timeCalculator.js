import React from 'react';
import './App.css';
import { Button, Icon } from 'semantic-ui-react';

class TimeCalculator extends React.Component {
  constructor(props) {
    super(props)

    this.calculateTime = this.calculateTime.bind(this)
  }


  calculateTime = () => {
    
  }

  render() {
    return (
      <div>
        <h3>Enter an amount of fish to harvest</h3>
        <Button 
          content="fish!" />
      </div>
    );
  }
}

export default TimeCalculator;
