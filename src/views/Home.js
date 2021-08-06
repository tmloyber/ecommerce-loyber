import React from 'react';
import '../App.css';
import ItemListContainer from '../container/ItemListContainer/ItemListContainer';
import CategoryListContainer from '../container/CategoryListContainer/CategoryListContainer';

function Home() {
    return (
        <div className="my-container">
            <CategoryListContainer />
            <div className="row d-flex justify-content-center home">
                <h2>Nuestros productos</h2>
            </div>
            <ItemListContainer />
        </div>
    )
}

export default Home;