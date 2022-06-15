// 1. import react
import React from "react";

// 2. additional import 
import Child from "./Child";
import Component from "./Component";

// 3. create functional component
const App = () => {
    //lets create a varaible 
    let variable;

    //lets create a function 
    const setVaribale = (data) => {
        variable = data;
    }
    return(
        <div style={{backgroundColor: "lightcoral"}}>
            <h1>App Component</h1>
            <Child 
            number={767}
            greetings={"Hello World"}
            setVaribale={setVaribale} />
            <Component />
        </div>
    );
};

// 4. export component
export default App;