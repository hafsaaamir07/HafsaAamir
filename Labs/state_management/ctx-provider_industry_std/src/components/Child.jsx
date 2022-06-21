 // 1. import react 
 import React from "react";

 // 2. additional imports 
 import GrandChild from "./GrandChild";

 // 3. create component 
 const Child = () => {
    return (
        <div>
          <GrandChild />
        </div>
    );
 };

 // 4. export component 
 export default Child;