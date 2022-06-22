import React from "react";

const Navigation = () => {
    return (
        <div className="ui secondary pointing menu">
            <a className="active item" href="/home"> Home </a>
            <a className="item" href="/about"> About </a>
            <a className="item" href="/projects"> Projects </a>
            <div className="right menu">
                <a className="ui item"> Logout </a>
            </div>
        </div>
    );
};
export default Navigation;