// 1. import react 
import React from "react";

// 2. additional imports
import {Route} from "react-router-dom";
import Navigation from "./Navigation";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";

// 3. create component 
const App = () => {
    return (
        <div>
            <div className="ui container" style={{marginTop: "30px"}}>
                <Navigation />
                <Route path="/home">
                    <Home />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/projects">
                    <Projects />
                </Route>
            </div>
        </div>
    );
};

// 4. export component
export default App;

