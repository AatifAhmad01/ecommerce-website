        // for(var i of items)
        // {
        //     if(i.id == item.id){

        //         i.quantity = item.quantity;
        //         // i.totalPrice = productDetails.price * item.quantity;
        //         setItem([...items])

        //         localStorage.setItem("cartItems",JSON.stringify({items: [...items]}))
        //         return;
        //     }
        // }

        // setItem([...items, item])

        // // const cartItems = JSON.parse(localStorage.getItem("cartItems"))

        // localStorage.setItem("cartItems",JSON.stringify({items: [...items]}))


                // const filteredItems = cart.items.filter(item => item.id != itemId)

        // setCart({items: [...filteredItems]})


import { createContext } from "react";
import { useState } from "react";

export const CartContext = createContext(null)

const CartContextProvider = function ({children}) {

    const [items, setItems ] = useState([])

    const onAddItem = (item) => {
        setItems([...items, item])
    }

    const onRemoveItems = (itemId) => {

    }

    const contextValue = {
        items,
        onAddItem,
        onRemoveItems
    }

    console.log("Refresh")

    return <CartContext.Provider value={contextValue} >
        {children}
    </CartContext.Provider>
}

export default CartContextProvider