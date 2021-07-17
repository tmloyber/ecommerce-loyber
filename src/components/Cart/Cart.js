import React, {useContext} from 'react';
import './Cart.css';
import {Link} from 'react-router-dom';
import {CartContext} from '../../context/CartContext';

function Cart() {
    const {cart, removeFromCart, clearCart, totalPrice} = useContext(CartContext);

    const handleRemoveFromCart = id => {
        removeFromCart(id);
    }

    if (!cart.length) {
        return (
            <div className="cart-container d-flex justify-content-center">
                <div>
                    <p>El carrito está vacío.</p>
                    <Link to="/" className="btn btn-primary btn-block mi-btn">Volver al inicio</Link>
                </div>
            </div>
        )
    }

    return (
        <div className="cart-container d-flex justify-content-center">
            <div className="col-8">
                <div className="row list-group">
                    {cart.map((item) => {
                        return (
                            <div key={item.product.id} className="list-group-item list-group-item-action" aria-current="true">
                                <div className="d-flex w-100 justify-content-between">
                                    <div className="d-flex w-100 justify-content-start">
                                        <img className="mb-1 cart-img" src={item.product.imageUrl} alt={item.product.name}/>
                                        <div>
                                            <h5 className="mb-1">{item.product.name}</h5>
                                            <p className="mb-1">${item.product.price}</p>
                                            <small>Cantidad: {item.quantity}</small>
                                        </div>
                                    </div>
                                    <a onClick={() => handleRemoveFromCart(item.product.id)}>
                                        <ion-icon name="trash-outline"></ion-icon>
                                    </a>
                                </div>
                            </div>
                        );
                    })}
                    <div className="list-group-item list-group-item-action" aria-current="true">
                    <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">Total:</h5>
                        <p className="mb-1">${totalPrice}</p>
                    </div>
                </div>
                </div>
                <div className="row g-4">
                    <button className="col-6 btn btn-primary btn-block mi-btn secundario" onClick={clearCart}>Vaciar carrito</button>
                    <button className="col-6 btn btn-primary btn-block mi-btn">Finalizar compra</button>
                </div>
            </div>
        </div>
    )
}

export default Cart;
