import React, {useState, useContext} from 'react';
import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import {Link} from 'react-router-dom';
import {CartContext} from '../../context/CartContext';

function ItemDetail({product}) {
    const {cart, addToCart} = useContext(CartContext);
    const [added, setAdded] = useState(false);

    const handleAddToCart = quantity => {
        addToCart(product, quantity);
        setAdded(true);
    }
    
    //console.log(cart);

    return (
        <div className="prod-detail">
            <img src={product.imageUrl} alt={product.name}/>
            <div className="info">
                <h3 className="title">{product.name}</h3>
                <h5 className="price">${product.price}</h5>
                <p className="description">{product.description}</p>
                {!added ? (
                    <ItemCount handleAddToCart={handleAddToCart} stock={product.stock}/>
                ) : (
                    <Link to="/cart" id="btn-comprar" className="btn btn-primary btn-block mi-btn">Terminar mi compra</Link>
                )}
            </div>
        </div>
    )
}

export default ItemDetail;