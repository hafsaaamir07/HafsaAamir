// 1. import react
import React from "react";

// 2. additional imports
import Child from "./Child";
import StateContext from "./../contexts/StateContext"
import { useState } from "react";

// 3. create component
const Parent = () => {
    return (
        <div>
            <StateContext.Provider>
                <Child/>
            </StateContext.Provider>
        </div>
    )
}

// 4. export component
export default Parent;