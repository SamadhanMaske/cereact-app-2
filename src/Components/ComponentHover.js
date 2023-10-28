
import React, { Component } from 'react'
import withCounter from './withCounter';

class ComponentHover extends Component {
    // constructor(props) {
    //     super(props)
      
    //     this.state = {
    //        count: 0,
    //     }
    //   }
  
    //   increaseCount = ()=>{
    //       this.setState((prevState)=>{
    //           return {count:prevState.count+1}
    //       });
    //   }
  render() {
    let {count, incrementCount} = this.props;
    return (
      <button onMouseOver={incrementCount}>
        Hovered {count} times
      </button>
    )
  }
}

export default withCounter(ComponentHover);