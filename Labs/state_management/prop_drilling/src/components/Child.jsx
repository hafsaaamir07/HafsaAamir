// 1. import react
import React from "react";

// 2. additional import
import GrandChild from "./GrandChild";

// 3. create component
const Child= (props) => {
    console.log("props");
    return (
        <div>
           <GrandChild cheese={props.cheese}/>
        </div>
    );
};

// 4. export component
export default Child;
