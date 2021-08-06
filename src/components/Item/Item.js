import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import './Item.css';
import {CartContext} from '../../context/CartContext';

function Item({product}) {
    const {addToCart} = useContext(CartContext);

    const handleAddToCart = quantity => {
        addToCart(product, quantity);
    }
    
    return (
        <div className="col-lg-4 col-12">
            <div className="card" style={{width: "18rem"}}>
                <Link to={`/detail/${product.id}`} className="prod-link">
                    <img src={product.imageUrl} className="card-img-top" alt={product.name}/>
                    <div className="card-body">
                        <h5 className="card-title">{product.name}</h5>
                        <p className="card-text">${product.price}</p>
                    </div>
                </Link>
                <ItemCount handleAddToCart={handleAddToCart} stock={product.stock}/>
            </div>
        </div>
    )
}

export default Item;