// 1. import react
import React from "react"

// 2. additional imports
import { useState } from "react";

// 3. create component
const Counter = () => {

    // lets declare a new  state inside of our application
    const [counter ,setCounter] = useState(0);

    //second piece of state
    const [evenCounter ,setEveneCounter] = useState(0);

    ///lets log something inside our console
    console.log("Iam just a random log");

    //lets create a function to add one to our counter
    const handleAddOne = () => {
        if (counter %2 === 0){
            setEveneCounter(evenCounter + 1)
        }
        
        //if counter not even update counter
        setCounter(counter +1)
    }
    return(
        <div>
            <h1>Counter: {counter}</h1>
            <h1>Even Counter: {evenCounter}</h1>
            <button onClick={handleAddOne}>Click Me to Add One</button>
        </div>
    );
};

// 4. export component
export default Counter;