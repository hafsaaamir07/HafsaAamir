// 1. import react
import React from "react";

// 2. additional import

// 3. create component
const Grandchild= (props) => {
    console.log(props)
    return (
        <div>
            <h1>Grandchild Component</h1>
            <h2>{props.cheese}</h2>
        </div>
    );
};

// 4. export component
export default Grandchild;
