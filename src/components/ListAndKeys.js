import React, { Component } from 'react'

export class ListAndKeys extends Component {

    render() {

        function ListItem (props) {
            return <li>{props.value}</li>
           }
       
        function NumberList(props){
               const numbers = props.numbers;
               const ListItems = numbers.map((number) => 
                   <ListItem key={ number.toString() } value={number} />
               );
       
               return (
                   <ul>
                       {ListItems}
                   </ul>
               )
           }
           


        const numbers = [1, 2, 3, 4, 5, 6, 7];
        return (
           <NumberList numbers = {numbers} /> 
        );
    }
}

export default ListAndKeys
