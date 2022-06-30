import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import env from "react-dotenv";

const Giphy = () => {
    env.config({
        path: "./config.env"
    });
    const [gif , setGif] = useState("")

    return (
        <div>
            <h1>Giphy</h1>
            <button>Make API CALL Again</button>
        </div>
    )
}

export default Giphy;