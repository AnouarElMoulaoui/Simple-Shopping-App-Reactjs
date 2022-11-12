import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../contexts/CartContext';
import CardSingle from '../../components/card/CardSingle';

const Card = () => {
    const {cart} = useContext(CartContext);
    const [total,setTotal] = useState(0);

    useEffect(()=>{
        let t =  cart.length > 0 ?  
            cart.map(el => el.qte * el.price).reduce((value1,value2) => value1 +value2,0) : 0;
        setTotal(t);
        console.log(t);
    },[cart]);


    return (

        <div className="h-screen flex justify-center items-center bg-gray-50">

            <div className="bg-white shadow-lg w-5/6  rounded-3xl flex flex-col sm:flex-row">

                <div className="h-96 sm:w-3/4 p-3 overflow-auto">
                    <div className="flex justify-between border-b pb-2">
                        <h1 className="uppercase font-medium">Shopping Card</h1>
                        <span>{cart ? cart.length : 0} items</span>
                    </div>
                  {
                    cart.map(product => <CardSingle key={product.id} product={product} />)
                  }
                  
                </div>
                <div className="bg-gray-200 text-black p-3 sm:w-1/3  rounded-br-3xl sm:rounded-r-3xl">
                    <div className="border-b border-black p-2">
                        <h1 className="uppercase font-bold">Summary</h1>
                    </div>
                    <div className="flex justify-between pt-3 pb-3 border-b border-black">
                        <span>{cart ? cart.length : 0} Items</span>
                        <span>{total} $</span>
                    </div>

                    <div className="pt-2 pb-2 flex flex-col">
                        <span>Coupon</span>
                        <input className="p-1 border mt-2 border-black outline-none" type="text" />
                            <button className="bg-black text-white w-full mt-2 p-1 uppercase  active:border active:border-black active:text-black active:bg-white ">Valid</button>
                    </div>
                    <div className="mt-3 border-t border-black pt-2 flex justify-between">
                        <h1>Total : </h1>
                        <span className="font-bold">{total} $</span>
                    </div>
                    <div className="pt-3">
                        <button className="bg-black w-full p-1 text-white uppercase  active:border active:border-black active:text-black active:bg-white">CheckOut</button>
                    </div>
                </div>

            </div>
        </div>
    )
}


export default Card;