// 1. import react
import React from "react"

// 2. additional imports
import { useState } from "react";

// 3. create component
const Counter = () => {

    // lets declare a new  state inside of our application
    const [counter ,setCounter] = useState(0);
    return(
        <div>
            <h1>Counter Component</h1>
        </div>
    );
};

// 4. export component
export default Counter;