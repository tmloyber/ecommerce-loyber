import React from 'react';
import '../App.css';
import ItemListContainer from '../container/ItemListContainer/ItemListContainer';

function Home() {
    return (
        <div className='my-container'>
            <ItemListContainer />
        </div>
    )
}

export default Home;