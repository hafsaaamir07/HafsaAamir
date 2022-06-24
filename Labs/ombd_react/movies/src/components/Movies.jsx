import React from "react";
import { useState } from "react";

const Movies = () => {
    const [formData, setFormData] = useState({
        baseURL: "http://www.omdbapi.com/?",
        apikey: 'apikey='+'910e0323',
        query: '&t=',
        movieTitle: '',
        searchURL: '',
    }) 
    
    return(
       <form>
        <label htmlFor="search">Title</label> {" "}
            <input 
                id="search" 
                name="search" 
                type="text"
                value=""
            />
            {" "}
            <input type="submit"/>
      </form>
    )
    
};

export default Movies;
