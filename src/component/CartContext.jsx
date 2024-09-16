
import React, { createContext, useContext, useState } from 'react';


const CartContext = createContext();


export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]); 

  
  const addToCart = (item) => {
    
    const existingItem = cart.find(cartItem => cartItem.imagename === item.imagename);

    if (existingItem) {
      
      setCart(cart.map(cartItem => 
        cartItem.imagename === item.imagename
          ? { ...cartItem, count: cartItem.count + item.count }
          : cartItem
      ));
    } else {
      
      setCart([...cart, { ...item }]);
    }
  };

  
  const removeFromCart = (itemName) => {
    setCart(cart.filter(item => item.imagename !== itemName));
  };

  
  const clearCart = () => {
    setCart([]); 
  };

  
  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};


export const useCart = () => {
  return useContext(CartContext);
};
