import React from "react";
import {Link} from "react-router-dom";

const Navigation = () => {
    return (
       //using link tags instaed of anchor bc anchor tags will reload the application
       //and we want react to re-render/re-load
       //with link tags you do not need hrefs
       //we are basically saying link the home page "to" this..
        <div className="ui secondary pointing menu">
            <Link className="active item" to="/"> Home </Link>
            <Link className="item" to="/about"> About </Link>
            <Link className="item" to="/projects"> Projects </Link>
            <div className="right menu">
                <Link className="ui item" to="/logout"> Logout </Link>
            </div>
        </div>
    );
};
export default Navigation;