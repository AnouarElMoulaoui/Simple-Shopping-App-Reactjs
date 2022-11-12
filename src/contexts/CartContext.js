import { createContext, useState } from "react";


export const CartContext = createContext();

const CartPorvider = ({children}) =>{
    const [cart,setCart] = useState([]);

    const addToCart = (produit,) => {
       let isExists = cart.some(el => el.id === produit.id);
       if(!isExists){
            setCart([
                ...cart,
                {...produit,qte : 1}
            ]);
        }
    }

    const increseQte = (product) =>{
       const newCart = cart.filter(el => el.id !== product.id);
       product.qte += 1;
       setCart([
            ...newCart,
            product
        ]);
    }

    const decreseQte = (product) => {
        const newCart = cart.filter(el => el.id !== product.id);
        product.qte = product.qte > 1 ? --product.qte : 1;
        setCart([
            ...newCart,
            product
        ])
    }

    const removeItem = (product) =>  {
        const newCart = cart.filter(el => el.id !== product.id);
        setCart([
            ...newCart
        ])
    }

    return (
            <CartContext.Provider value={{cart,setCart,addToCart,increseQte,decreseQte,removeItem}}>
                {children}
            </CartContext.Provider>
        )
}

export {CartPorvider};

