import React, {useState, useEffect} from 'react';
import ItemList from '../../components/ItemList/ItemList';
import './ItemListContainer.css';
import Spinner from '../../components/Spinner/Spinner';
import {database} from '../../firebase'; 

function ItemListContainer({categoryId}) {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    let itemCollection = database.collection("products");

    useEffect(() => {
        (async() => {
            if (categoryId) {
                const categoryRef = database.collection('categories').doc(categoryId);
                itemCollection = database.collection("products").where("category", "==", categoryRef);
            }
            const products = [];
            const response = await itemCollection.get();
            response.docs.forEach((doc) => {
                products.push({...doc.data(), id: doc.id});
            });
            setItems(products);
            setLoading(false);
        })();
    }, [categoryId]);

    return (
        <div className="items-container">
            {loading || !items ? (
                <div className="d-flex justify-content-center">
                    <Spinner />
                </div>
            ) : (
                <div className="col-md-12 col-12 d-flex justify-content-center">
                    <ItemList products={items} />
                </div>
            )} 
        </div>
    )
}

export default ItemListContainer;