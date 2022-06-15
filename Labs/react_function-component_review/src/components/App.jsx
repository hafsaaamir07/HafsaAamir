// 1. import react
import React from "react";

// 2. additional import 

import Child from "./Child";

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
            <Child setVaribale={setVaribale} />
        </div>
    );
};

// 4. export component
export default App;