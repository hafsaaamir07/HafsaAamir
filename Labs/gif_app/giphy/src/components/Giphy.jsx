import React from "react";
import { useState } from "react";
import axios from "axios";
import Display from "./Display";



const Giphy = () => {

    
    const [gif , setGif] = useState("")
    const handleClick = async () => {
        const response = await axios.get("https://api.giphy.com/v1/gifs/random?api_key=IwSOpWzXHv4qCzM4HJ78xHguc90ME0Su&tag=&rating=g")
        const data = response.data.data.url
        console.log(data)
        setGif(response)
    }
    return (
        <div>
            <h1>Giphy</h1>
            <button onClick={handleClick}>Make API CALL Again</button>
            <Display gif={gif}/>
        </div>
    )
}

export default Giphy;