import React from "react";

const Component = () => {
    //create an array of objects
    const dogs = [
        {name: "Sparky", age: 5},
        {name: "Spot", age: 3},
        {name: "Ralph", age: 8},
        {name: "Fido", age: 7},
    ];
    //create a list of dogs
    const dogList = dogs.map((dog) => {
        return (
            <div>
                <h1>{dog.name}</h1>
                <h2>{dog.age}</h2>
            </div>
        );
    });
    return (
        <div>
            <h1>Component</h1>
            <div>{dogList}</div>
        </div>
    );
};

export default Component;