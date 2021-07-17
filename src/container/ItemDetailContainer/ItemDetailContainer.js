import React, {useState, useEffect, useContext} from 'react';
import ItemDetail from '../../components/ItemDetail/ItemDetail';
import './ItemDetailContainer.css';
import {database} from '../../firebase'; 

function ItemDetailContainer({id}) {
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async() => {
            const doc = await database.collection("products").doc(id).get();
            setProduct({...doc.data(), id: doc.id});
            setLoading(false);
        })();
    }, [id]);

    return (
        <div className="detail-container">
            {loading || !product ? (
                <div className="d-flex justify-content-center">
                    <h3>Cargando...</h3>
                </div>
            ) : (
                <ItemDetail product={product} />
            )}
        </div>   
    )
}

export default ItemDetailContainer;