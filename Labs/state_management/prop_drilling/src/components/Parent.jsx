// 1. import react
import React from "react";

// 2. additional import
import Child from "./Child";
import Grandchild from "./GrandChild";

// 3. create component
const Parent = () => {
    return (
        <div>
            <Child />
        </div>
    );
};

// 4. export component
export default Parent;

//prop drilling is when the parent passes data from the child who then
//passes data to the grandchild (child's child)