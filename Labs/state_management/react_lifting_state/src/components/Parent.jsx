// 1.import from react 
import React from "react";

// 2. additional imports 
import SenderChild from "./SenderChild";
import ReceieverChild from "./ReceiverChild";
import { useState } from "react";

// 3. create component 
const Parent = () => {
    //create a piece of state
    const [state, setState] = useState("Helllo")
    return (
        <div>
            <SenderChild />
            <ReceieverChild state={state}/>
        </div>
    )
}

// 4. export component
export default Parent;

//lifting state occurs when siblings need to share state with each other
//lifting state is when sibling1 when sends data to the parent 
//when the parent sends data recieved from sibling1 to sibling2 that is passing props