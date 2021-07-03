import React from 'react';
import '../App.css';
import ItemListContainer from '../container/ItemListContainer/ItemListContainer';

function Products({match}) {
    let categoryName = match.params.name;
    
    return (
        <div className='my-container'>
            <p className="nav-category">Productos / {categoryName.charAt(0).toUpperCase() + categoryName.slice(1)}</p>
            <ItemListContainer category={categoryName}/>
        </div>
    )
}

export default Products;