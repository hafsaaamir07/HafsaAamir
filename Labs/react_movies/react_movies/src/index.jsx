// 1. import React
import React from "react";

// 2. import ReactDom
import ReactDOM from "react-dom";

// 3. additional imports 
import App from "./components/App";

// 4. render our components to the screen
ReactDOM.render(
    <App />, document.querySelector("#root")
);