import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({children}) =>
{
    const [cartList, setCarList] = useState([]);
    
    const addItem = (item, qty) =>{
        let itemForCart=
        {
            ...item,
            qty
        }
        
        let esta = isInCart(item.id) 
        
        if(esta){
            let index = cartList.findIndex((element) =>
        {
            return element.id === item.id    
        })
        
        cartList[index].qty = qty
        
        }else{
            setCarList([
                ...cartList,
                itemForCart
            ])
        }
    }

    const removeItem = (id) =>{
        let newCartList = cartList.filter(item => item.id !== id)
        setCarList(newCartList)
    }

    const clear = () =>{
        setCarList([])
    }

    const isInCart = (id) =>{
        let isIn = cartList.find((element) =>
        {
            return element.id === id
        })
        return isIn
    }

    return(
        <CartContext.Provider value={{cartList, addItem, removeItem, clear}}>
            {children}
        </CartContext.Provider>
    );
}
export default CartContextProvider;