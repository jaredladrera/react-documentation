import React, { Component } from 'react';

class Clock extends Component {

    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            name: 'John doe',
            counter : 0
        };
    }

    componentDidMount(){
        this.lance = setInterval(() => this.tick(), 1000)
        //this.jared = setInterval(() => this.count(), 1000);
    }

    componentWillMount(){
        clearInterval(this.lance);
        clearInterval(this.jared);
    }

    tick() {
        this.setState({
            date: new Date(),
        });
    }

    state = {  }
    render() { 
        return (
            <React.Fragment>
                <h2>Hello {this.state.name}</h2>
                <p>It is { this.state.date.toLocaleTimeString()}</p>               
            </React.Fragment>
          );
    }
}
 
export default Clock;