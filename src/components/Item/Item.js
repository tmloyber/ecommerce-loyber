import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import './Item.css';

function Item({product}) {
    return (
        <div className="col">
            <div className="card" style={{width: "18rem"}}>
                <img src={product.imageUrl} className="card-img-top" alt={product.name}/>
                <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">${product.price}</p>
                    <ItemCount stock={product.stock}/>
                    <a href="#" className="btn btn-primary btn-block mi-btn">Agregar al carrito</a>
                </div>
            </div>
        </div>
    )
}

export default Item;