import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from '../../axios';

const  Detail = () => {
    const [product,setProduct] = useState({});
    const {id} = useParams();

    useEffect(()  =>{
        const fetchProduct = async () => {
            await axios.get(`https://fakestoreapi.com/products/${id}`)
            .then(res => setProduct(res.data))
            .catch(error => console.log(error));
        }
        fetchProduct();

     },[]);


  return (
    product &&  <div className="px-7 py-9">
        <div className="flex items-start flex-wrap">
        <div className="w-64">
            <img src={product.image} alt={product.title}/>
        </div>
        <div className="w-96 px-1 py-3">
            <h3 className="font-medium capitalize">{product.title}</h3>
            <p className="text-sm">{product.description}</p>
            <hr />
            <h4>Category : {product.category}</h4>
            <hr />
            <h4>Price : {product.price} $</h4>
        </div>
        </div>
    </div> 
  )
}
export default Detail;
