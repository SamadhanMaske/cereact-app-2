
import React, { Component } from 'react'
import withCounter from './withCounter';

class ClickCounter extends Component {
    // constructor(props) {
    //   super(props)
    
    //   this.state = {
    //      count: 0,
    //   }
    // }

    // increaseCount = ()=>{
    //     this.setState((prevState)=>{
    //         return {count:prevState.count+1}
    //     });
    // }
    
  render() {
    let {count,incrementCount} = this.props;

    return (
      <div>
        <button onClick={incrementCount}>Clicked {count} times {this.props.name}</button>
      </div>
    )
  }
}

export default withCounter(ClickCounter, 5);

