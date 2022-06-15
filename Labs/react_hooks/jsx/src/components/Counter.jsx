// 1. import react
import React from "react"

// 2. additional imports
import { useState } from "react";

// 3. create component
const Counter = () => {

    // lets declare a new  state inside of our application
    const [counter ,setCounter] = useState(0);
    //lets create a function to add one to our counter
    const handleAddOne = () => {
        setCounter(counter + 1);
    }
    return(
        <div>
            <h1>{counter}</h1>
            <button onClick={handleAddOne}>Click Me to Add One</button>
        </div>
    );
};

// 4. export component
export default Counter;