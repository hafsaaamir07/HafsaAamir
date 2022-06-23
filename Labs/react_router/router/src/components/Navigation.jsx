import React from "react";
import {Link} from "react-router-dom";

const Navigation = (props) => {
    console.log(props)
    return (
       //using link tags instaed of anchor bc anchor tags will reload the application
       //and we want react to re-render/re-load
       //with link tags you do not need hrefs
       //we are basically saying link the home page "to" this..

        <div className="ui secondary pointing menu">
            {/*the actice class is the one with the line under indicating this is the page clicked */}
            {/*this is saying if my location pathname is is just forward slash then add the active 
            class to that component */}
            <Link className={`item ${props.location.pathname === "/" ? "active" : ""}`} 
                to="/"> Home 
            </Link>

            <Link className={`item ${props.location.pathname === "/about" ? "active" : ""}`} 
                to="/about"> About 
            </Link>

            <Link className={`item ${props.location.pathname === "/projects" ? "active" : ""}`} 
                to="/projects"> Projects 
            </Link>

            <Link className={`item ${props.location.pathname === "/detail" ? "active" : ""}`} 
                to="/detail/"> Detail
            </Link>

            <div className="right menu">
                <Link className={`ui item ${props.location.pathname === "/logout" ? "active" : ""}`} 
                    to="/logout"> Logout 
                </Link>
            </div>
        </div>
    );
};
export default Navigation;