import React from 'react';
import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';

function ItemDetail({product}) {
    return (
        <div className="prod-detail">
            <img src={product.imageUrl} alt={product.name}/>
            <div className="info">
                <h3 className="title">{product.name}</h3>
                <h5 className="price">${product.price}</h5>
                <p className="description">{product.descripcion}</p>
                <ItemCount stock={product.stock}/>
                <a href="#" className="btn btn-primary btn-block mi-btn">Agregar al carrito</a>
            </div>
        </div>
    )
}

export default ItemDetail;