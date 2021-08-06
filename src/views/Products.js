import React from 'react';
import '../App.css';
import ItemListContainer from '../container/ItemListContainer/ItemListContainer';
import {useLocation} from 'react-router-dom';

function Products({match}) {
    let categoryName = match.params.name;
    const categoryId = useLocation().state;
    
    return (
        <div className='my-container'>
            <p className="nav-category">Productos / {categoryName.charAt(0).toUpperCase() + categoryName.slice(1)}</p>
            <ItemListContainer categoryId={categoryId} />
        </div>
    )
}

export default Products;