import React from 'react';
import Item from '../Item/Item';
import './ItemList.css';

function ItemList({products}) {
    return (
        <div className="row row-cols-1 row-cols-md-3 g-4">
            {products.map((prod) => {
                return (
                    <Item key={prod.id} product={prod} />
                );
            })}
        </div>
    )
}

export default ItemList;