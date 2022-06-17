// 1. import react
import React from "react";

// 2. additional imports
import { useRef } from "react";

// 3. create component
const FormComponent = () => {
    //lets create our first refrence
    const inputRef = useRef();

    //create refrence to the pTag
    const pTagRef = useRef();

    //lets add event handler
    const handleClick = () => {
        console.log(inputRef.current.value)
        console.log(pTagRef.current.textContent)
        
    }
    return (
        <div>
            <h1 style={{color: "lightsteelblue"}}>Form Component</h1>
            <input type="text" ref={inputRef}/>
            <p ref={pTagRef}>This is a p tag</p>
            <button onClick={handleClick}>Click me</button>
        </div>
    );
};

// 4. export component
export default FormComponent;