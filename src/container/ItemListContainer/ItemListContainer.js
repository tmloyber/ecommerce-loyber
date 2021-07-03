import React, {useState, useEffect} from 'react';
import ItemList from '../../components/ItemList/ItemList';
import './ItemListContainer.css';

function ItemListContainer({category}) {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('https://mocki.io/v1/1cd48680-a01d-4613-9412-ef82a88839a1')
            .then(response => response.json())
            .then(json =>  {
                if (!category) {
                    setItems(json);
                } else {
                    setItems(json.filter(p => p.categoria.toLowerCase() === category));
                }
            });
    }, [category]);

    return (
        <div className="items-container">
            <div className="col-12 d-flex justify-content-center">
                <ItemList products={items} />
            </div>
        </div>
    )
}

export default ItemListContainer;