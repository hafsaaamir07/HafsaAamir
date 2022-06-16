// 1. import react
import React from "react";

// 2. additional imports
import Counter from "./Counter";
import FormComponent from "./FormComponent";

// 3.create component
const App = () => {
    return(
        <div>
            <Counter />
            <FormComponent />
        </div>
    );
};

export default App;
