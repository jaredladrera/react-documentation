import React from 'react';
import './App.css';
import Clock from './components/Clock'
import EventListner from './components/EventListener'
import ListAndKeys from './components/ListAndKeys';
import NameForm from './components/NameForm';
import LiftingState from './components/LiftingState'
import FilterProductTable from './components/ThinkingInReact'

class App extends React.Component {

  render() {

    const Product = [
      {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
      {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
      {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
      {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
      {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
      {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
    ];   

    return (
        // <Clock />
        // <EventListner />
        // <ListAndKeys />
        // <NameForm />
        // <LiftingState />
        <FilterProductTable products={Product} />
    );

  }
}


export default App;
