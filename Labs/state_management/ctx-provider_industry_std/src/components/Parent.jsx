// 1. import react 
 import React from "react";

 // 2. additional imports 
 import Child from "./Child";
 import CheeseContext from "./../contexts/CheeseContext"

 // 3. create component 
 const Parent = () => {
    return (
        <div>
         <CheeseContext.Provider value="cheese">
            <Child />
         </CheeseContext.Provider>
        </div>
    );
 };

 // 4. export component 
 export default Parent;