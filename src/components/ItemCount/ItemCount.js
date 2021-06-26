import React, {useState} from 'react';
import './ItemCount.css';

function ItemCount(stock) {
    const [quantity, setQuantity] = useState(1);
  
    const handleIncrement = () => {
        if(quantity < stock.stock) {
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
        <div className="counter">
            <div className="btn-container">
                <button onClick={handleDecrement}>-</button>
            </div>
            <p>{quantity}</p>
            <div className="btn-container">
                <button onClick={handleIncrement}>+</button>
            </div>
        </div>
    )
}

export default ItemCount;