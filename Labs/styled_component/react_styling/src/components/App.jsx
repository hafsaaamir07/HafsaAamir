import React from "react";

import Component from "./Component";
import Title from "./Title";
import Greeting from "./Greeting";

const App = () => {
    return (
        <div>
            <Component> 
                <Title>
                    <Greeting />
                </Title>
            </Component>
        </div>
    );
};

export default App;