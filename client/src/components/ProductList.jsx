import React from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const ProductList = (props) => {
  const navigate = useNavigate();
  const {removeFromDom}= props;

  const deleteProduct = (productId) => {
    axios.delete(`http://localhost:8000/products/${productId}`)
    .then(res => {
        removeFromDom(productId);
      })
      
      .catch(err => console.error(err));
     
  }



  return (
    <div> 
      <h1>Product List:</h1>
      {props.products.map((product,i) => 
    //   <br /> Price: {product.price}  <br />Description: {product.description} <br /> 
    <>
      <Link to={`/products/${product._id}`} key={i} ><p>{product.title} </p>   <br /> </Link>

      <button  onClick={(e)=>{deleteProduct(product._id)}} > Delete</button>
      </>
      )}
    </div>
  )
}

export default ProductList;