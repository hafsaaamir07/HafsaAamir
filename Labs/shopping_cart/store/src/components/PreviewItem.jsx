import React from "react";

const PreviewItem = (props) => {
    return (
        <div>
            <h1>Preview Our New Item</h1>
            <h3>Name: {props.formData.name}</h3>
            <h3>Price: {props.formData.price}</h3>
            <h3>Description: {props.formData.description}</h3>
        </div>
    );
};

export default PreviewItem;