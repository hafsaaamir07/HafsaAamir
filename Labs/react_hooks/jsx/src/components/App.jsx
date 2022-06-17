// 1. import react
import React from "react";

// 2. additional imports
import Counter from "./Counter";
import FormComponent from "./FormComponent";
import FormControlled from "./FormControlled";
import FormUncontrolled from "./FormUncontrolled";

// 3.create component
const App = () => {
    return(
        <div>
            <Counter />
            <FormComponent />
            <FormControlled />
            <FormUncontrolled />
        </div>
    );
};

export default App;
 