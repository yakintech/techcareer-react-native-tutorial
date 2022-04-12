import React, { createContext, useState } from "react";

const cartContext = createContext(null);

export const CartProvider = ({ children }) => {

    
    const [cart, setCart] = useState([]);

    const values = {
        cart,
        setCart

    }

    return <cartContext.Provider value={values}>{children}</cartContext.Provider>

}

export default cartContext