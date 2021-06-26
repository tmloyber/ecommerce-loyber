import React, {useState, useEffect} from 'react';
import ItemList from '../../components/ItemList/ItemList';
import './ItemListContainer.css';

function ItemListContainer() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('https://mocki.io/v1/c505bb20-e693-4696-bd5f-af43c8392400')
            .then(response => response.json())
            .then(json => setItems(json));
    });

    return (
        <div className="items-container">
            <div className="col-12 d-flex justify-content-center">
                <ItemList products={items} />
            </div>
        </div>
    )
}

export default ItemListContainer;