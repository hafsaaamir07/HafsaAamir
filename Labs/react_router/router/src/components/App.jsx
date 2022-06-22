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
    // we do not get acess to router props
    // but can pass in props to the components
    return (
        <div>
            <div className="ui container" style={{marginTop: "30px"}}>
            <Navigation />
                {/* 
                <Route path="/home">
                    <Home homeData="this is data for the home page"/>
                </Route>
                <Route path="/about">
                    <About aboutData="this is data for the about page"/>
                </Route>
                <Route path="/projects">
                    <Projects />
                </Route> */}

                {/*This router lets us access the router props but we can not pass in
                custom props for the components */}
                <Route path="/home" component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/projects" component={Projects}/>
            </div>
        </div>
    );
};

// 4. export component
export default App;

