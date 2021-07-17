import React, {useContext} from 'react';
import './CartWidget.css';
import {Link} from 'react-router-dom';
import {CartContext} from '../../context/CartContext';

function CartWidget() {
    const {cartQuantity} = useContext(CartContext);

    return (
        <Link to="/cart" className="carrito">
            {cartQuantity > 0 ? (
                <div className="d-flex">
                    <p>({cartQuantity})</p>
                    <ion-icon name="cart-outline"></ion-icon>
                </div>
            ) : (
                <ion-icon name="cart-outline"></ion-icon>
            )}
        </Link>
    )
}

export default CartWidget;