
import React, { Component } from 'react'
import LifeCycleB from './LifecycleB';

class LifeCycleA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'Samadhan',
      }
      console.log('Lifecycle A constructor');
    }

    static getDerivedStateFromProps(props,state){
        console.log('LifecycleA getDerivedStateFromProps');
        return null; //returns object
    }

    componentDidMount(){
        console.log('LifecycleA ComponentDidMount');
    }
  render() {
    console.log('LifecycleA render');
    return (
        
      <div>
        <div>LifeCycleA</div>
        <LifeCycleB/>
      </div>
    )
  }
}

export default LifeCycleA