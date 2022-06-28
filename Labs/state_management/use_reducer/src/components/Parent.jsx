// 1. import react
import React from "react";

// 2. additional imports
import Child from "./Child";
import StateContext from "./../contexts/StateContext"
import { useState } from "react";
import { useReducer } from "react";

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

    //proviede an initial state to our store
    const initialState = 0;

    // lets create our state and our dispatch 
    /*every single reducer you create comes with 2 parameters
    1) dispatch: it takes your action and dispatches to every single reducer until
    we find the reducer that matches the action type
    2) getState:   */
    const [state , dispatch] = useReducer(reducer, initialState);


    //lets create our state
    //const [state , setState] = useState(0);
    return (
        <div>
            <StateContext.Provider value={{state, dispatch}}>
                <Child/>
            </StateContext.Provider>
        </div>
    )
}

// 4. export component
export default Parent;