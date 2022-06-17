// 1. import react 
import React from "react";

// 2. additional imports
import { useRef } from "react";

// 3. create component
const FormUncontrolled = () => {
    //create refrences
    const nameInputRef = useRef();

    const ageInputRef = useRef();


    return(
        <div> 
            <h1 style={{color: "lightslategrey"}}>Form Uncontrolled</h1>

            <form>
                <input type="text"  placeholder="write name here" ref={nameInputRef}/> {" "}
                <input type="number"  placeholder="write age here" ref={ageInputRef}/> {" "}
                <input type="submit" value="Submit Form" />
            </form>
            
        </div>
    );
};
// 4. export component
export default FormUncontrolled;
