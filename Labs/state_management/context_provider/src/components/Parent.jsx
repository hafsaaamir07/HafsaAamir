 // 1. import react 
 import React from "react";

 // 2. additional imports 
 import { createContext } from "react";
 import { useContext } from "react";

 //create our context provider
 const context = createContext(null); //when react loads our app its null
 

 //instead of passing from the parent to the child and then to grandchild
 //wee want to use context provider to go from parent to grandchild
 const Grandchild = () => {
    return (
        <div>
            <h1>Grandchild Component</h1>
        </div>
    );
 };
 const Child = () => {
    return (
        <div>
            <Grandchild />
        </div>
    );
 };

 // 3. create component 
 const Parent = () => {
    return (
        <div>
            <context.Provider value={"cheese"}>
                <Child />
            </context.Provider>
        </div>
    );
 };

 // 4. export component 
 export default Parent;