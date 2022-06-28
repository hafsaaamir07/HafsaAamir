// 1. import react
import React from "react";

// 2. additional imports
import Child from "./Child";
import StateContext from "./../contexts/StateContext"
import { useState } from "react";

// 3. create component
const Parent = () => {
    //lets create our reducer 
    const reducer = (state, action) => {
        //lets create our action 
        const {type, payload} = action;

        //in redux when writing type it is always upper case
        switch(type) {
            case "ADD":
                return state + 1;
            case "SUBTRACT":
                return state - 1;
            default: 
                return state;
        }

    };


    //lets create our state
    const [state , setState] = useState(0);
    return (
        <div>
            <StateContext.Provider value={{state, setState}}>
                <Child/>
            </StateContext.Provider>
        </div>
    )
}

// 4. export component
export default Parent;