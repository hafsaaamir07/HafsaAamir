// 1. import react 
import React from "react";

// 2. import react-dom 
import ReactDOM from "react-dom";

// 3. additional imports
import {BrowserRouter as Router} from "react-router-dom";
import App from "./components/App"

// 4. render component to the screeen
ReactDOM.render (
    <Router> 
        <App />
    </Router> ,document.querySelector("#root")
);