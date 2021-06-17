import React from 'react';
import './CartWidget.css';

function CartWidget() {
    return (
        <div className="d-flex carrito">
            <p>(0)</p>
            <ion-icon name="cart-outline"></ion-icon>
        </div>
    )
}

export default CartWidget;