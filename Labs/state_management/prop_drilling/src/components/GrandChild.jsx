// 1. import react
import React from "react";

// 2. additional import

// 3. create component
const GrandChild= (props) => {
    console.log(props)
    return (
        <div>
            <h1>GrandChild Component</h1>
            <h2>{props.cheese}</h2>
        </div>
    );
};

// 4. export component
export default GrandChild;
