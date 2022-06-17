// 1. import react
import React from "react";

// 2. additional imports
import Counter from "./Counter";
import FormComponent from "./FormComponent";
import FormControlled from "./FormControlled";

// 3.create component
const App = () => {
    return(
        <div>
            <Counter />
            <FormComponent />
            <FormControlled />
        </div>
    );
};

export default App;
 