
import React, { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext';

const CardSingle = ({product}) => {
    const {increseQte,decreseQte,removeItem} = useContext(CartContext);
    return (
     product &&  <div className="flex h-28 items-center border-b pb-2">
            <div className="w-1/5">
                <img className="h-20 w-4/5" src={product.image} alt={product.title} />
            </div>
            <div className=" w-2/5">
                {product.title}
            </div>
            <div className=" w-1/5">
                <span className="font-medium border p-1  cursor-pointer active:bg-black active:text-white"
                     onClick={() => decreseQte(product)}>-</span>
                <span className="font-medium  p-1">{product.qte}</span>
                <span className="font-medium border p-1 cursor-pointer active:bg-black active:text-white"
                     onClick={() => increseQte(product)}>+</span>
            </div>
            <div className="w-1/5">
                {product.price} $
            </div>
            <div className="1/5">
                <i className="cursor-pointer" onClick={() => removeItem(product)}>x</i>
            </div>
        </div>
    )
}

export default CardSingle;
