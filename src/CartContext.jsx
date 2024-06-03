import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [discount, setDiscount] = useState(0);

    const addToCart = (product) => {
        setCartItems((prevItems) => {
            const itemIndex = prevItems.findIndex(item => item.id === product.id);
            if (itemIndex !== -1) {
                const updatedItems = [...prevItems];
                updatedItems[itemIndex].quantity += product.quantity;
                updatedItems[itemIndex].totalPrice += product.totalPrice;
                return updatedItems;
            }
            return [...prevItems, product];
        });
    };

    const removeItemFromCart = (id) => {
        setCartItems((prevItems) => prevItems.filter(item => item.id !== id));
    };

    const isInCart = (productId) => {
        return cartItems.some(item => item.id === productId);
    };

    const getTotalPrice = () => {
        const total = cartItems.reduce((sum, item) => sum + item.totalPrice, 0);
        return total - total * (discount / 100);
    };

    const applyDiscount = (code) => {
        if (code === 'bichinhosdati') {
            setDiscount(10);
        } else {
            setDiscount(0);
        }
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeItemFromCart, isInCart, getTotalPrice, applyDiscount }}>
            {children}
        </CartContext.Provider>
    );
};
