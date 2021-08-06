import React from 'react';
import Item from '../Item/Item';

function ItemList({products}) {
    // array de filas necesarias de 3 productos cada una
    const rows = [...Array(Math.ceil(products.length / 3) )];
    // array de filas con productos
    const productRows = rows.map((row, idx) => products.slice(idx * 3, idx * 3 + 3));

    return (
        <div>
            {productRows.map((row, idx) => (
                <div className="row g-4" key={idx}>    
                    {row.map(prod => <Item key={prod.id} product={prod} /> )}
                </div> 
            ))}
        </div>
    )
}

export default ItemList;