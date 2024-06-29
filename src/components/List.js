import { React, useState } from 'react';
import data from "./ListDataCountry.json";

function List(props) {
    //create a new array by filtering the original array
    const filteredData = data.filter((elmt) => {
        //if no input the return the original
        if (props.input === '') {
            return elmt;
        }
        //return the item which contains the user input
        else {
            return elmt.translations.fra.toLowerCase().includes(props.input);
            
        }
        
    })
    return (
        
        <ul>
            
            {filteredData.map((country,index) => (
                <li key={index}>{country.translations.fra}</li>
            ))}
        </ul>
    )
}

export default List