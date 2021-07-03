import React from 'react';
import {Link} from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import './Item.css';

function Item({product}) {
    return (
        <div className="col">
            <div className="card" style={{width: "18rem"}}>
                <Link to={`/detail/${product.id}`} className="prod-link">
                    <img src={product.imageUrl} className="card-img-top" alt={product.name}/>
                    <div className="card-body">
                        <h5 className="card-title">{product.name}</h5>
                        <p className="card-text">${product.price}</p>
                    </div>
                </Link>
                <div className="carrito">
                    <ItemCount stock={product.stock}/>
                    <a href="#" className="btn btn-primary btn-block mi-btn">Agregar al carrito</a>
                </div>
            </div>
        </div>
    )
}

export default Item;