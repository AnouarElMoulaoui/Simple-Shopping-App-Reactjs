import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../../contexts/CartContext';

const SingleProduct = ({product}) => {
  const {id,title,image,category,price} = product;
  const {cart,addToCart} = useContext(CartContext);
  console.log(cart);
  return (

    <div className="w-60 mx-auto p-3">
      <Link to={`/product/detail/${id}`}>
      <div className="">
        <img src={image} alt={title} />
      </div>
      </Link>
      <div className="text-center px-2">
        <h4>{title}</h4>
        <div className="flex justify-between items-center">
          <span className="text-sm">{category}</span>
          <span>{price} $</span>
        </div>
        <div>
          <button onClick={() => addToCart(product)} className="bg-black text-white px-10 mt-2 py-2 rounded-full uppercase active:bg-white active:border active:border-black hover:text-blue-500">Add to cart</button>
        </div>
      </div>
    </div>
    
  )
}

export default SingleProduct;