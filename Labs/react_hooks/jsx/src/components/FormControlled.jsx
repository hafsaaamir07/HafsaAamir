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

    //create handleChange function for input values
    const handleChange = (e) => {
        setFormState({
            /*if the sate is an object or array we have to pass a new array or object and 
            not a modified version bc obj and arr are passed by refrence and we want to change the value*/

            /*here we created a new object and spreaad the initial object, inour case being name and age*/
            ...formState, [e.target.name] : e.target.value /*this will be assigned to the name state -> so 
            whatever name is in the form that is the current target*/
        })
    }

    //create a function responsible for submitting our form
    const handleFormSubmit = (e) => {
        //prevents form from reloading
        e.preventDefault();
    }
    return(
        <div>
            <h1 style={{color: "lightcoral"}}>Form Controlled</h1>
            <form onSubmit={handleFormSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="write name here"
                    onChange={(e) => {
                        return handleChange(e)
                    }}
                    value={formState.name}
                />{" "}
                <input
                    type="number"
                    name="age"
                    placeholder="write age here"
                    onChange={(e) => {
                        return handleChange(e)
                    }}
                    value={formState.age}
                />
                <input type="submit" value="Submit Form" />
            </form>
        </div>
    );
};
// 4. export component
export default FormControlled

/* ...formState, [e.target.name] : e.target.value
-> we spread fisrt because we want the input values we are typing to replace the empty string in the object
ex: ...formState, [e.target.name] : e.target.value -> name: "", age: 0, name: "hafsa", age: 23
here the empty name and age will get replced by the later values which is the input values typed

-> if we spread at the end then the empty values in the object will replace the input values from the form
ex: [e.target.name] : e.target.value , ...formState -> name: "hafsa", age: 23, name: "", age: 0,
here the input values from the form will be replaced by the empty values

*/