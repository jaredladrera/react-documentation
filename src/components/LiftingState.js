import React, { Component } from 'react';


function BoiilingWater(props){
    if(props.celsius >= 100){
        return <p>The water would boil</p>
    }

    return <p>The water would not</p>
}

function toCelsius(fahrenheit){
    return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert){
    const input = parseFloat(temperature)
    if(Number.isNaN(input)){ return ''; }

    const output = convert(input);
    const rounded = Math.round( output * 1000 ) / 1000
    return rounded.toString();
 }

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
};

//this is the temperature class 
class LiftingState extends Component {
    constructor(props){
        super(props)
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.onTemperatureChange(e.target.value);
    }

    render() { 

        const { temperature }  = this.props;
        const scale = this.props.scale;

        return ( 
            <fieldset>
                <legend>
                    Enter Temperature in {scaleNames[scale]}
                </legend>
                <input value = {temperature} onChange={this.handleChange} />
                <BoiilingWater celsius={parseFloat(temperature)} />
            </fieldset>
         );
    }
}

class Calculator extends Component {

    constructor(props){
        super(props)
        this.state = {
            temperature: '',
            scale: 'c'
        }
    }

    handleCelsiusChange = (temperature) => {
        this.setState({scale: 'c', temperature})
    }

    handleFahrenheitChange = (temperature) => {
        this.setState({scale: 'f', temperature})
    }


    render(){
        const scale = this.state.scale;
        const temperature = this.state.temperature;

        const celsius = scale === 'f' ? 
            tryConvert(temperature, toCelsius) : temperature;
        
        const fahrenheit = scale === 'c' ? 
            tryConvert(temperature, toFahrenheit) : temperature;

        return(
            <React.Fragment>
                <LiftingState scale='c'
                temperature={celsius} 
                onTemperatureChange={this.handleCelsiusChange} />

                <LiftingState scale='f'
                temperature = {fahrenheit}
                onTemperatureChange={this.handleFahrenheitChange} />
            </React.Fragment>
        )
    }
}
 
export default Calculator;