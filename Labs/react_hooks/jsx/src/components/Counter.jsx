// 1. import react
import React from "react"

// 2. additional imports
import { useState, useEffect } from "react";

// 3. create component
const Counter = () => {

    // lets declare a new  state inside of our application
    const [counter ,setCounter] = useState(0);

    //second piece of state
    const [evenCounter ,setEvenCounter] = useState(0);

    /*Lets create an effct to render our component
    everytime our evenCounter state chnages */
    useEffect(() => {
        //lets log something inside our console
        console.log("Iam just a random log");
    },[evenCounter]) 
    // want to run this when evenCounter shows up on the screen and when evenCounter changes


    //lets create a function to add one to our counter
    const handleAddOne = () => {
        if (counter %2 === 0){
            setEvenCounter(evenCounter + 1)
        }
        
        //if counter not even update counter
        setCounter(counter +1)
    }
    return(
        <div>
            <h1>Counter Component</h1>
            <h2>Counter: {counter}</h2>
            <h2>Even Counter: {evenCounter}</h2>
            <button onClick={handleAddOne}>Click Me to Add One</button>
        </div>
    );
};

/*useEffect: allows you more control over HOW and WHEN your component updates.

1. By passing nothing as a second parameter of useEffect
useEffect (() => {
    Do somethinh here
}) //will fire anytime anything on the screen/code changes with no dependency array

2. By passing an empty array as a second parameter
useEffect(() => {
    Do something here
}, []) // fire only the first time component loads on the page/shows up on screen

3. By passing an array with data inside of it
useEffect(() => {
    Do something here
},[data] ) // fire the first time component loads on the page
and every time when the data changes 

*/


//4. export component
export default Counter;