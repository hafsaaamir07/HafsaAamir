import React from "react";

const Navigation = () => {
    return (
        <div class="ui secondary pointing menu">
            <a class="active item" href="/home"> Home </a>
            <a class="item" href="/about"> About </a>
            <a class="item" href="/projects"> Projects </a>
            <div class="right menu">
                <a class="ui item"> Logout </a>
            </div>
        </div>
    );
};
export default Navigation;