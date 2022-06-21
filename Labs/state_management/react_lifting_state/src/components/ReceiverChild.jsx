// 1.import from react 
import React from "react";

// 2. additional imports 

// 3. create component 
const ReceieverChild = (props) => {
    return (
        <div>
            {/*first time the application loads it will show hello
            because state is ("hello") 
            then for our ReceiverChild we pass our state and the data is recevied as a props
            the button in SenderChild updates the state*/}
            <h1 style={{color: "lightcoral"}}>Receiver Component</h1>
            <h2>{props.state}</h2>
        </div>
    )
}

// 4. export component
export default ReceieverChild;