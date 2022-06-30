import React from "react";

const Display = (props) => {
    
    return (
        <div>
            <img src={props.img} alt={props.img.title}/>
        </div>
    );
};

export default Display;