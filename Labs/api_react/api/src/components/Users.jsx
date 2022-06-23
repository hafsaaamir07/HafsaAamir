import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const Users = () => {
    //lets create a variable to hold our application
    /*initial state will be ana empty array because before
    we make our api call its going to empty */
    const [users, setUsers] = useState()

    //lets craete our effect
    useEffect (() => {
        return(
            <div>
                <h1>Users Component</h1>
            </div>
        )

    });
};

export default Users;