// 1. import react
import React from "react";

// 2. additional imports
import { useContext } from "react";
import StateContext from "./../contexts/StateContext"

// 3. create component
const GrandChild = () => {
    const ctx = useContext(StateContext)
    console.log(ctx) // state and dispatch coming from Parent component
    
    // craete a function responsible for dispatching our addition action
    const dispatchAdditionAction = (obj) => {
        return ctx.dispatch(obj)
    }

    //create a function responsible for dispatching our subtraction action
    const dispatchSubtractionAction = (obj) => {
        return ctx.dispatch(obj)
    }
    
    
    
    
    
    return (
        <div>
            {/*h1 diaplys the state pulled from the context  */}
            <h1>{ctx.state}</h1>
            {/*the buttons call dispatch and pass the cation to the reducer */}
            <button onClick={()=> {
                return dispatchAdditionAction({type: "ADD", payload: null})
                }}>Add
            </button>
            <button onClick={() => {
                return dispatchSubtractionAction ({type:"SUBTRACT", payload: null})
                }}
                >Subtract
            </button>
        </div>
    )
}

// 4. export component
export default GrandChild;