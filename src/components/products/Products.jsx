
import axios from '../../axios';
import React, { useEffect, useState } from 'react'
import SingleProduct from './SingleProduct';

const Products = () => {
  const [products,setPorducts] = useState([]);
  const [loading,setLoading] = useState(false);

    useEffect(()  =>  {
        setLoading(true);
        const fetchAllProducts = async () => {
            await axios.get("/products")
          .then(res =>  setPorducts(
               res.data))
          .catch(error => console.log(error));
          setLoading(false);
        }
        fetchAllProducts();
    } ,[]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {
          loading ? <div className='h-screen flex justify-center items-center '><span>Loading....</span></div> : products.length > 0 ? products.map(product => <SingleProduct product={product} key={product.id} />) : <span>Vide</span>
        }
    </div>

  )
}

export default Products;
