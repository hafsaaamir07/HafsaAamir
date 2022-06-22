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
                {/* 1st syntax: we do not get acess to router props but can pass in 
                props to the components               
                <Route path="/home">
                    <Home homeData="this is data for the home page"/>
                </Route>
                <Route path="/about">
                    <About aboutData="this is data for the about page"/>
                </Route>
                <Route path="/projects">
                    <Projects />
                </Route> */}

                {/*2nd synatx: This router lets us access the router props but we can not pass in
                custom props for the components 
                <Route path="/home" component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/projects" component={Projects}/>
                */}
        
                <Route path="/home" render={(routerProps) => { 
                    return <Home {...routerProps} homeData="This is data for home component"/>
                    }}/>
                <Route path="/about" render={() => { return <About/>}}/>
                <Route path="/projects" render={() => { return <Projects/>}}/>
                


            </div>
        </div>
    );
};

// 4. export component
export default App;

