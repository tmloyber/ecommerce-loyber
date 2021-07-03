import React from 'react';
import Item from '../Item/Item';
import './ItemList.css';

function ItemList({products}) {
    return (
        <div className="row g-4">
            {products.map((prod) => {
                return (
                    <Item key={prod.id} product={prod} />
                );
            })}
        </div>
    )
}

export default ItemList;