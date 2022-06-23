// 1. import react 
import React from "react";

// 2. additional imports
import {Route, Switch} from "react-router-dom";
import Navigation from "./Navigation";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Detail from "./Detail";

// 3. create component 
const App = () => {
    return (
        <div>
            <div className="ui container" style={{marginTop: "30px"}}>
            {/*to get acess to router props we need to wrap the navigation in a route tag */}
                <Route component={Navigation}/>
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

                {/* 3rd synatx: this router allows us to have access to both custom and router
                props
                <Route path="/home" render={(routerProps) => { 
                    return <Home {...routerProps} homeData="This is data for home component"/>
                    }}/>
                <Route path="/about" render={() => { return <About/>}}/>
                <Route path="/projects" render={() => { return <Projects/>}}/>
                 */}

                {/* switch only renders the first matching route --> which can be problem
                To fix this problem we use eaxct path -- > this shows us exactly that route 
                    for example if i hit "/" i only want to go to "/"(home page) and if its 
                    "/" and something else after the forward slash then i want to go to exactly that route */}
                <Switch>
                    <Route exact path="/" render={(routerProps) => { 
                        return <Home {...routerProps} homeData="This is data for home component"/>
                        }}/>
                    <Route path="/about" render={(routerProps) => { return <About {...routerProps}/>}}/>
                    <Route path="/projects" render={(routerProps) => { return <Projects {...routerProps}/>}}/>
                    <Route path="/detail/:id?" render={(routerProps) => { return <Detail {...routerProps}/>}}/>
                </Switch>
            </div>
        </div>
    );
};

// 4. export component
export default App;

