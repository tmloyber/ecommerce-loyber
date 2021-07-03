import React from 'react';
import ItemDetailContainer from '../container/ItemDetailContainer/ItemDetailContainer';

function Detail ({match}) {
    let itemId = match.params.id;

    return (
        <div className='my-container'>
            <ItemDetailContainer id={itemId}/>
        </div>
    )
}

export default Detail;