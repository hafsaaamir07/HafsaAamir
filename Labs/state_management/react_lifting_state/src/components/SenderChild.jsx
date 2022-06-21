// 1.import from react 
import React from "react";

// 2. additional imports 

// 3. create component 
const SenderChild = (props) => {
    return (
        <div>
            <h1 style={{color: "lightseagreen"}}>Sender Component</h1>
            <button onClick={() => {
                return props.updateState("GoodBye!")
                }}>Click Me</button>
            <hr></hr>
        </div>
    );
};

// 4. export component
export default SenderChild;