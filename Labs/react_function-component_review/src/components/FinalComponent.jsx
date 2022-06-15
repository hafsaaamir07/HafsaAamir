import React from "react";

const FinalComponent = () => {
    //create the Arthur object
    const Arthur = {
        name: "Arthur Bernier",
        age: "35",
        email: "cero@arthurbernierjr.com",
    }
    // return Object.keys(Arthur) will return  ["name","age","email"]
    return Object.keys(Arthur).map((key) => {
        return (
            <h2>
                {/*First time: key is name
                 then it would do Arthur[name] and it will
                 give value of the key name -> "Arthur Bernier" */}
                {key}: {Arthur[key]}
            </h2>
        )

    })
};

export default FinalComponent;