
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

    shouldComponentUpdate(nextProps, nextState){
      console.log('Lifecycle A shouldComponentMount');
      return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
      console.log('Lifecyce A getSnapshotBeforeUpdate');
      return null;
    }

    componentDidUpdate(prevProps, prevState){
      console.log('Lifecycle A componentDidMount');
    }

    componentDidMount(){
        console.log('LifecycleA ComponentDidMount');
    }

    changeState = ()=> {
        this.setState({
          name: 'Manasi',
        })
    }

  render() {
    console.log('LifecycleA render');
    return (
        
      <div>
        <div>LifeCycleA</div>
        <button onClick={this.changeState}>Change State</button>
        <LifeCycleB/>
      </div>
    )
  }
}

export default LifeCycleA