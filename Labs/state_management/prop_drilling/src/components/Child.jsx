// 1. import react
import React from "react";

// 2. additional import
import Grandchild from "./GrandChild";

// 3. create component
const Child= () => {
    return (
        <div>
           <Grandchild />
        </div>
    );
};

// 4. export component
export default Child;
