// 1. import react
import React from "react";

// 2. additional imports
import { useContext } from "react";
import StateContext from "./../contexts/StateContext"

// 3. create component
const GrandChild = () => {
    const ctx = useContext(StateContext)
    console.log(ctx) // state and dispatch coming from Parent component
    return (
        <div>
            <h1>GrandChild Component</h1>
        </div>
    )
}

// 4. export component
export default GrandChild;