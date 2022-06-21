 // 1. import react 
 import React, {useContext} from "react";

 // 2. additional imports 
 import CheeseContext from "./../contexts/CheeseContext"

 // 3. create component 
 const GrandChild = () => {
   //lets retrieev our context
   const ctx = useContext(CheeseContext);
    return (
        <div>
           <h1>GrandChild Component</h1>
           <h3>{ctx}</h3>
        </div>
    );
 };

 // 4. export component 
 export default GrandChild;