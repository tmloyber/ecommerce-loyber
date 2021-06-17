import React from 'react';
import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';

function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light header">
        <div className="container-fluid">
            <a className="navbar-brand logo" href="#">Wander</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Inicio</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Productos
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a className="dropdown-item" href="#">Remeras</a></li>
                            <li><a className="dropdown-item" href="#">Buzos</a></li>
                            <li><a className="dropdown-item" href="#">Camperas</a></li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Nosotros</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#" tabIndex="-1" aria-disabled="true">Contacto</a>
                    </li>
                </ul>
            </div>
        </div>
        <CartWidget/>
    </nav>
    )
}

export default NavBar;
