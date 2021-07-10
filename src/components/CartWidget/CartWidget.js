import React, {useState, useEffect, useContext} from 'react';
import './CartWidget.css';
import {Link} from 'react-router-dom';
import {CartContext} from '../../context/CartContext';

function CartWidget() {
    const {cart} = useContext(CartContext);
    const [cartQuantity, setCartQuantity] = useState(0);
    
    useEffect(() => {
        if (cart.length > 0) {
            setCartQuantity(cart.length);
        }
    }, [0, cart]);

    return (
        <Link to="/cart" className="d-flex carrito">
            <p>({cartQuantity})</p>
            <ion-icon name="cart-outline"></ion-icon>
        </Link>
    )
}

export default CartWidget;