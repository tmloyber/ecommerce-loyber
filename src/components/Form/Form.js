import React from 'react';
import './Form.css';
import {useForm} from "react-hook-form";

function Form({handleFinishOrder}) {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        handleFinishOrder(data);
        //document.getElementById("myForm").reset();
    };

    return (
        <form id="myForm" onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
                <input type="text" className="form-control" name="name" placeholder="Nombre"  
                    {...register("name", {
                        required: "Ingrese su nombre",
                        minLength: {value:2, message:"Minimo 2 caracteres"}, 
                        maxLength: {value:12, message:"Maximo 12 caracteres"},
                        pattern: {
                            value: /^[A-Za-z]+$/i,
                            message: "Ingrese un nombre válido"
                        }
                    })}
                />
                {errors.name && (
                    <p className="error">{errors.name.message}</p>
                )}
            </div>
            <div className="mb-3">
                <input type="text" className="form-control" name="lastName" placeholder="Apellido"
                    {...register("lastName", {
                        required: "Ingrese su apellido",
                        minLength: {value:2, message:"Minimo 2 caracteres"}, 
                        maxLength: {value:12, message:"Maximo 12 caracteres"},
                        pattern: {
                            value: /^[A-Za-z]+$/i,
                            message: "Ingrese un apellido válido"
                        }
                    })}
                />
                {errors.lastName && (
                    <p className="error">{errors.lastName.message}</p>
                )}
            </div>
            <div className="mb-3">
                <input type="number" className="form-control" name="phone" placeholder="Teléfono" 
                    {...register("phone", {
                        required: "Ingrese su numero",
                        pattern: {
                            value: /^(?:(?:00)?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$/, 
                            message:"Ingrese un numero valido. Ejemplo: 5491112345678"
                        } 
                    })}
                />
                {errors.phone && (
                    <p className="error">{errors.phone.message}</p>
                )}
            </div>
            <div className="mb-3">
                <input type="email" className="form-control" name="email" placeholder="Email"
                    {...register("email", {
                        required: "Ingrese su email",
                        pattern: {
                            value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/, 
                            message:"Ingrese un email valido. Ejemplo: hola@gmail.com"
                        } 
                    })}
                />
                {errors.email && (
                    <p className="error">{errors.email.message}</p>
                )}
            </div>
            <button type="submit" className="btn btn-primary mi-btn">Realizar pedido</button>
        </form>
    )
}

export default Form;
