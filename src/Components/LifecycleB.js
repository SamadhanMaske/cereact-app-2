
import React, { Component } from 'react'

class LifeCycleB extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'Samadhan',
      }
      console.log('LifeCycleB constructor');
    }

    static getDerivedStateFromProps(props,state){
        console.log('LifeCycleB getDerivedStateFromProps');
        return null; //returns object
    }

    componentDidMount(){
        console.log('LifeCycleB ComponentDidMount');
    }
  render() {
    console.log('LifeCycleB render');
    return (
        
      <div>LifeCycleB</div>
    )
  }
}

export default LifeCycleB