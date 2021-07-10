import React, {useState} from 'react';
import './ItemCount.css';

function ItemCount({handleAddToCart, stock}) {
    const [quantity, setQuantity] = useState(1);
  
    const handleIncrement = () => {
        if(quantity < stock) {
            setQuantity(quantity + 1);
        } else {
            console.log("No hay suficiente stock");
        }
    };

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <div className="carrito">
             <div className="counter">
                <div className="btn-container">
                    <button onClick={handleDecrement}>-</button>
                </div>
                <p>{quantity}</p>
                <div className="btn-container">
                    <button onClick={handleIncrement}>+</button>
                </div>
            </div>
            <button className="btn btn-primary btn-block mi-btn" onClick={() => handleAddToCart(quantity)}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount;