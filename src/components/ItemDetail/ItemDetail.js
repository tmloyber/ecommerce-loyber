import React, {useState, useContext} from 'react';
import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import {Link} from 'react-router-dom';
import {CartContext} from '../../context/CartContext';

function ItemDetail({product}) {
    const {addToCart} = useContext(CartContext);
    const [added, setAdded] = useState(false);

    const handleAddToCart = quantity => {
        addToCart(product, quantity);
        setAdded(true);
    }

    const handleAddMore = () => {
        setAdded(false);
    }
    
    return (
        <div className="row prod-detail">
            <img className="col-md-6 col-12" src={product.imageUrl} alt={product.name}/>
            <div className="info col-md-5 col-12">
                <h3 className="title">{product.name}</h3>
                <h5 className="price">${product.price}</h5>
                <p className="description">{product.description}</p>
                {!added ? (
                    <ItemCount handleAddToCart={handleAddToCart} stock={product.stock}/>
                ) : (
                    <div>
                        <button className="btn btn-primary btn-block mi-btn secundario" onClick={handleAddMore}>Seguir agregando</button>
                        <Link to="/cart" id="btn-comprar" className="btn btn-primary btn-block mi-btn">Terminar mi compra</Link>
                    </div>
                )}
            </div>
        </div>
    )
}

export default ItemDetail;