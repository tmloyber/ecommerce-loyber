import React, {useState, useEffect} from 'react';
import ItemList from '../../components/ItemList/ItemList';
import './ItemListContainer.css';
import {database} from '../../firebase'; 

function ItemListContainer({category}) {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    let itemCollection = database.collection("products");

    useEffect(() => {
        (async() => {
            if(category) {
                itemCollection = database.collection("products").where("category", "==", category);
            }
            const products = [];
            const response = await itemCollection.get();
            response.docs.forEach((doc) => {
                products.push({...doc.data(), id: doc.id});
            });
            setItems(products);
            setLoading(false);
        })();
    }, [category]);

    return (
        <div className="items-container">
            {loading || !items ? (
                <div className="d-flex justify-content-center">
                    <h3>Cargando...</h3>
                </div>
            ) : (
                <div className="col-12 d-flex justify-content-center">
                    <ItemList products={items} />
                </div>
            )} 
        </div>
    )
}

export default ItemListContainer;