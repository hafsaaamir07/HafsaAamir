// 1. import from react
import React from "react";

// 2. additional imports 
import { useState } from "react";

// 3. create component 
const FormControlled = () => {
    //create state
    const [formState, setFormState] = useState({
        name: "",
        age: 0,
    });
    return(
        <div>
            <h1 style={{color: "lightcoral"}}>Form Controlled</h1>
            <form>
                <input
                    type="text"
                    name="name"
                    placeholder="write name here"
                />{" "}
                <input
                    type="number"
                    name="age"
                    placeholder="write age here"
                />
                <input type="submit" value="Submit Form" />
            </form>
        </div>
    );
};
// 4. export component
export default FormControlled