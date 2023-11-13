
import React, { Component } from 'react'
import RegComp from './RegComp';
import PureComp from './PureComp';

class PureParent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "Samadhan",
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: "Samadhan",
            })
        }, 2000);
    }

    render() {
        console.log("*********Parent component render***********");
        return (
            <div>
                PureParent Component
                <RegComp name={this.state.name} />
                <PureComp name={this.state.name} />
            </div>
        )
    }
}

export default PureParent