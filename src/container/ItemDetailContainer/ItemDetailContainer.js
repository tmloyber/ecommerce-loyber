import React, {useState, useEffect} from 'react';
import ItemDetail from '../../components/ItemDetail/ItemDetail';

function ItemDetailContainer({id}) {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        fetch('https://mocki.io/v1/1cd48680-a01d-4613-9412-ef82a88839a1')
            .then(response => response.json())
            .then(json => setProduct(json.find(p => p.id == id)))
    }, []);

    return (
        <div className="items-container">
            <ItemDetail product={product} />
        </div>   
    )
}

export default ItemDetailContainer;