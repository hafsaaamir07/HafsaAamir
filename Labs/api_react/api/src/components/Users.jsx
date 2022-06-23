import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const Users = () => {
    //lets create a variable to hold our application
    /*initial state will be ana empty array because before
    we make our api call its going to empty */
    const [users, setUsers] = useState()

    //lets create our effect
    // we can make api directly in our useEffect we need an helper function to do so
    useEffect (() => {
       // create a helper function to make api calls
       const helperFunction = async () => {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        console.log(response);
       }
       helperFunction();
    });
    return (
        <div>
            <h1>Users Component</h1>
        </div>
    )
};

export default Users;