// 1. import react
import React from "react";

// 2. additional import 
import Child from "./Child";
import Component from "./Component";
import FinalComponent from "./FinalComponent";

// 3. create functional component
const App = () => {
    //lets create a varaible 
    let variable;

    //lets create a function 
    const setVaribale = (data) => {
        variable = data;
    }
    return(
        <div>
            <h1 style={{backgroundColor: "lightcoral"}}>App Component</h1>
            <Child 
            number={767}
            greetings={"Hello World"}
            setVaribale={setVaribale} />
            <Component />
            <FinalComponent />
        </div>
    );
};

// 4. export component
export default App;