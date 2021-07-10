import React, {useState, useEffect, useContext} from 'react';
import ItemList from '../../components/ItemList/ItemList';
import './ItemListContainer.css';
import {ItemsContext} from '../../context/ItemsContext';

function ItemListContainer({category}) {
    const [itemsDatabase] = useContext(ItemsContext);
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!category) {
            setItems(itemsDatabase);
        } else {
            setItems(itemsDatabase.filter(p => p.categoria.toLowerCase() === category));
        }
        setLoading(false);
    }, [category, itemsDatabase]);

    if (loading || !items) {
        return (
            <div className="items-container d-flex justify-content-center">
                <h3>Cargando...</h3>
            </div>
        )
    }

    return (
        <div className="items-container">
            <div className="col-12 d-flex justify-content-center">
                <ItemList products={items} />
            </div>
        </div>
    )
}

export default ItemListContainer;