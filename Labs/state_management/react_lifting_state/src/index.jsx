// 1. import react
import React from "react";

// 2. import react-dom
import ReactDOM from "react-dom";

// 3. additional imports 
import Parent from "./components/Parent"

// 4. render component to screen
ReactDOM.render(
    <Parent />, document.querySelector("#root")
);