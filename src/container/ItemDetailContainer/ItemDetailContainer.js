import React, {useState, useEffect} from 'react';
import ItemDetail from '../../components/ItemDetail/ItemDetail';
import './ItemDetailContainer.css';
import Spinner from '../../components/Spinner/Spinner';
import {Link} from 'react-router-dom';
import {database} from '../../firebase'; 

function ItemDetailContainer({id}) {
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);
    const [idError, setIdError] = useState(false);

    useEffect(() => {
        (async() => {
            await database.collection("products").doc(id).get()
            .then((docRef) => {
                if (docRef.exists) {
                    setProduct({...docRef.data(), id: docRef.id});
                } else {
                    setIdError(true);
                }
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error obteniendo producto: ", error);
            });
        })();
    }, [id]);

    if (idError && !loading) {
        return (
            <div className="detail-container d-flex justify-content-center">
                <div>
                    <p>No existe un producto con este id</p>
                    <Link to="/" className="btn btn-primary btn-block mi-btn">Volver al inicio</Link>
                </div>
            </div> 
        )
    } else {
        return (
            <div className="detail-container">
                {loading || !product ? (
                    <div className="d-flex justify-content-center">
                        <Spinner />
                    </div>
                ) : (
                    <ItemDetail product={product} />
                )}
            </div>   
        )
    }
}

export default ItemDetailContainer;