import React from "react";

const Child = (props) => { // you can so props or pass in {setVariable} directly to get the function
    //we will see definition of the function (will be an object)
    console.log(props.setVariable)
    return (
        <div>
        </div>
    );
};

export default Child; 