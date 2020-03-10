import React, { Component } from 'react';


class EventListener extends Component {

    constructor(props) {
        super(props)

        this.state = {isToggle: true};

        // to use 'this' you need use bind function 
        // other way is to use ES6 function to auto binding 
        this.handleClick = this.handleClick.bind(this);

        this.test();
    }

    handleClick () {
        console.log("this is " + this);
        this.setState(state => ({
            isToggle: !state.isToggle
        }));
    }

    test = () => {
        console.log("this is ", this);
    }

state = {  }
    render() { 
        return (  
            <React.Fragment>
                <button onClick={this.handleClick}>
                 {this.state.isToggle ? 'ON' : 'OFF'}
                </button>
            </React.Fragment>
        );
    }
}
 
export default EventListener
