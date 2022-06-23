import React from "react";

const IsEven = (props) => {
    if (props.number % 2 === 0){
        return(
            <h2>Is Even</h2>
        )
    }
    else {
        return (
            <h2>Is Odd</h2>
        )
    }
};

export default IsEven;