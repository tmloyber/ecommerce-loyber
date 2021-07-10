import React, {useState, useEffect, useContext} from 'react';
import ItemDetail from '../../components/ItemDetail/ItemDetail';
import './ItemDetailContainer.css';
import {ItemsContext} from '../../context/ItemsContext';

function ItemDetailContainer({id}) {
    const [itemsDatabase] = useContext(ItemsContext);
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setProduct(itemsDatabase.find(p => p.id === parseInt(id)));
        setLoading(false);
    }, [id, itemsDatabase]);

    if (loading || !product) {
        return (
            <div className="detail-container d-flex justify-content-center">
                <h3>Cargando...</h3>
            </div>
        )
    }

    return (
        <div className="detail-container">
            <ItemDetail product={product} />
        </div>   
    )
}

export default ItemDetailContainer;