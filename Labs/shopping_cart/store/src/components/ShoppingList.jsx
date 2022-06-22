// 1. import react 
import React from "react";

// 2. additional imports
import Data from "./Data";
import { useState } from "react";
import Form from "./Form";

// 3. create component 
const ShoppingList = () => {
    const [data, setData] = useState(Data)
    const cartItems = data.map((item) => {
        console.log(item)
        return (
            <li>{item.name}: {" "}{item.price}</li>
        );
    }); 
    
    return (
        <div>
            <Form data={data} setData={setData}/>
            <h1>Big Time Shopping</h1>
            {cartItems}
        </div>
    );
};

// 4. export component
export default ShoppingList;