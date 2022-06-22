import React, { useState } from 'react'

import PreviewItem from './PreviewItem';

const Form= (props) => {
    const [formData, setFormData] = useState({
        name: "",
        price:"",
        description: ""
    })
    const handleFormSubmit = (e) => {
        e.preventDefault();
        const newItem = {
            name: formData.name,
            price: formData.price,
            description: formData.description
        };
        props.setData([newItem, ...props.data])
    }
    //useSate does not automatically merge and update the state so we have to
    //ue the spread operator --> meaning that when you type in one input box
    // and then move to another the text will disappear with use state so thats where
    // the spread operator comes in handy
    return(
        <div>
            <h1>Add New Product</h1>
            <form>
                <label htmlFor="name">Name: </label>
                <input
                    id="name"
                    name= "name"
                    type="text"
                    value={formData.name}
                    onChange = {(e) => setFormData({...formData, name: e.target.value})}
                />
                {/*how we read this is copy every property in the formData object
                and then just override the "name" field with a diff value*/}
                <br />
                <br />

                <label htmlFor="price">Price: </label>
                <input
                    id="price"
                    name= "price"
                    type="text"
                    value={formData.price}
                    onChange={(e) => setFormData({...formData, price: e.target.value})}
                />
                {/*similary here we make a replica of the formData object and then 
                only update the price property with the new value */}
                <br />
                <br />

                <label htmlFor="description">Description: </label>
                <input
                    id="description"
                    name= "description"
                    type="text"
                    value={formData.description}
                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                />
                <br />
                <br />
                <input type="submit" onClick={(e)=> {handleFormSubmit(e)}}/>
            </form>
            <PreviewItem formData={formData}/>
        </div>
    );
};

export default Form;