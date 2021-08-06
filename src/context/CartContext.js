import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext([]);

export const CartProvider = ({children}) => {
    const itemsInLocal = () => {
        if (localStorage.getItem("cart") !== null) {
            return JSON.parse(localStorage.getItem("cart"));
        } else {
            return [];
        }
    };

    const [cart, setCart] = useState(itemsInLocal);
    const [totalPrice, setTotalPrice] = useState(0);
    const [cartQuantity, setCartQuantity] = useState(0);

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
        localStorage.clear();
    }

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));

        const calculateTotal = cart.reduce((amount, item) => {
            return amount + item.product.price * item.quantity;
        }, 0);
        setTotalPrice(calculateTotal);

        const totalItemsInCart = cart.reduce((amount, item) => {
            return amount + item.quantity;
        }, 0);
        setCartQuantity(totalItemsInCart);
    }, [cart]);

    return <CartContext.Provider value={{cart, setCart, clearCart, addToCart, removeFromCart, isInCart, totalPrice, setTotalPrice, cartQuantity, setCartQuantity, itemsInLocal}}>
        {children}
    </CartContext.Provider>;
}