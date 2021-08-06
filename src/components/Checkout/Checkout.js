import React, {useContext, useState} from 'react';
import './Checkout.css';
import Form from '../Form/Form';
import Spinner from '../../components/Spinner/Spinner';
import {CartContext} from '../../context/CartContext';
import {Link} from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/firestore';
import { database } from "../../firebase";

function Checkout() {
    const {cart, totalPrice, clearCart} = useContext(CartContext);
    const [loading, setLoading] = useState(false);
    const [orderFinished, setOrderFinished] = useState(false);
    const [orderId, setOrderId] = useState("");

    const handleFinishOrder = async(values) => {
        setLoading(true);

        let items = cart.map(item => ({id: item.product.id, name: item.product.name, price: item.product.price, quantity: item.quantity}));

        await database.collection("orders").add({
            buyer: values,
            items: items,
            total: totalPrice,
            date: firebase.firestore.FieldValue.serverTimestamp()
        })
        .then((docRef) => {
            setOrderId(docRef.id);
            updateStock(items);
            setOrderFinished(true);
            setLoading(false);
            clearCart();
        })
        .catch((error) => {
            console.error("Error realizando el pedido: ", error);
        });
    }

    const updateStock = () => {
        const itemCollection =  database.collection("products");

        cart.forEach(item => {
            itemCollection.doc(item.product.id).update({
                stock: item.product.stock - item.quantity
            })
            .then(() => {
                console.log("Stock actualizado");
            })
            .catch((error) => {
                console.error("Error actualizando el stock: ", error);
            });
        })
    }

    if (!orderFinished && !loading) {
        return (
            <div className="col-12 d-flex justify-content-center">
                <div className="col-md-4 col-12 content">
                    <h2>Checkout</h2>
                    <p className="datos">Ingresa tus datos para realizar el pedido.</p>
                    <Form handleFinishOrder={handleFinishOrder} />
                </div>
            </div>
        )
    } else if (!orderFinished && loading) {
        return (
            <div className="container d-flex justify-content-center">
                <Spinner />
            </div>
        )
    } else {
        return (
            <div className="col-12 d-flex justify-content-center">
                <div className="col-md-4 col-12 content">
                    <h2>Gracias por tu compra!</h2>
                    <p className="datos">Tu número de orden es {orderId}</p>
                    <Link to="/" className="btn btn-primary btn-block mi-btn">Volver al inicio</Link>
                </div>
            </div>
        )
    }
}

export default Checkout;
