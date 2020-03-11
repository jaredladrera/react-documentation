import React from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from './components/Clock'
import EventListner from './components/EventListener'
import ListAndKeys from './components/ListAndKeys';
import NameForm from './components/NameForm';
import LiftingState from './components/LiftingState'

class App extends React.Component {

  render() {

    return (
        // <Clock />
        // <EventListner />
        // <ListAndKeys />
        // <NameForm />
        <LiftingState />
    );

  }
}

export default App;
