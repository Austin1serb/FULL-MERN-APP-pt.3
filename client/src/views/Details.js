import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, Link, useNavigate } from "react-router-dom";
    
const Details = (props) => {
    const navigate = useNavigate();

    const [product, setProduct] = useState({})
    const { id } = useParams();
    
    useEffect(() => {
        axios.get('http://localhost:8000/products/' +id)
            .then(res => setProduct(res.data))
            .catch(err => console.error(err));
    }, []);

    const deleteProduct = () => {
        axios.delete(`http://localhost:8000/products/${product._id}`)
        .then(res => {
            console.log(res);
            navigate('/');
          })
          
          .catch(err => console.error(err));
         
      }
    
    return (
        <div >
            <h1> {product.title}</h1>
            <Link to={`/products/${id}/edit`}>Edit</Link>
            <button onClick={deleteProduct} >Delete</button>

            <p >Price: ${product.price}</p>
            <p >Description: {product.description}</p>
        </div>
    )
}
    
export default Details;