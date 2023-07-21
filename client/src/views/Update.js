import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";



const Update = (props) => {
    const navigate = useNavigate();

    const { id } = useParams();
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    useEffect(() => {
        axios.get(`http://localhost:8000/products/${id}`)
            .then(res => {
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
                console.log(res.data)
            })
    }, []);

    const updatedProduct = e => {
        
        e.preventDefault();
        axios.patch(`http://localhost:8000/products/${id}/edit`, {
            title,
            price,
            description
        })
            .then(navigate("/"))
            .catch(err => console.log(err));
    }

    console.log(title, price, description)
    return (
        <div>
            <h1>Update a Product</h1>
            <form onSubmit={updatedProduct} >
                <p>
                    <label>Title: </label><br/>
                    <input type="text"
                    name='title'
                    value={title}
              
                    onChange={(e) =>{setTitle(e.target.value)}} />
                </p>
                <p>
                    <label>Price: </label><br/>
                    <input type="text"
                    name='price'
                    value={price}
                    onChange={(e) =>{setPrice(e.target.value)}} />
                </p>
                <p>
                    <label>Description: </label><br/>
                    <input type="text"
                    name='description'
                    value={description}
                    onChange={(e) =>{setDescription(e.target.value)}} />
                </p>
                <input type="submit" />
            </form>
        </div>

    )
}

export default Update