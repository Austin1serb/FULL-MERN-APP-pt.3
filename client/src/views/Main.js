import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductForm from '../components/productForm';
import ProductList from '../components/ProductList';



const Main = (props) => {
  const [products, setProducts] = useState([])
  const [loaded, setLoaded] = useState(false);

  const getProducts = () => {
    axios.get('http://localhost:8000/products')
      .then(response => {
        setProducts(response.data);
        setLoaded(true);
      })
      .catch(error => console.error(error));
  }


  useEffect(getProducts, [])


  const removeFromDom = productId => {
    setProducts(products.filter(product => product._id !== productId))
  }


  return (
    <div>
      <ProductForm updateList={getProducts} />
      <hr />
      {loaded && <ProductList products={products} removeFromDom={removeFromDom} />}
    </div>
  )
}

export default Main