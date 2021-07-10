import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext([]);

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    const addToCart = (product, quantity) => {
        if(isInCart(product.id)) {
            const newCart = cart.map(item => {
                if(item.product.id === product.id) {
                    return {product, quantity: item.quantity + quantity};
                } else {
                    return item;
                }
            });
            setCart(newCart);
        } else {
            setCart(oldCart => [...oldCart, {product, quantity}]);
        }
    }

    const removeFromCart = (productId) => {
        const newCart = cart.filter(item => item.product.id !== productId);
        setCart(newCart);
    }

    const isInCart = (productId) => {
        if(cart.find(item => item.product.id === productId)) {
            return true;
        } else {
            return false;
        }
    }

    const clearCart = () => {
        setCart([]);
    }

    useEffect(() => {
        calculateTotal();
    }, [cart]);

    const calculateTotal = () => {
        let total = 0;
        cart.map(item => {
            total+= item.product.price * item.quantity;
        });
        setTotalPrice(total);
    }

    return <CartContext.Provider value={{cart, setCart, clearCart, addToCart, removeFromCart, isInCart, totalPrice, setTotalPrice, calculateTotal}}>
        {children}
    </CartContext.Provider>;
}