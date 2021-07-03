import React from 'react';
import './NavBar.css';
import {Link, useHistory} from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';

function NavBar() {
    const history = useHistory();

    const handleCategoryChange = (e) => {
        if (e.target.id) {
            history.push(`/category/${e.target.id}`);
        }  
    } 

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light header">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand logo">Wander</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/" className="nav-link" tabIndex="-1" aria-disabled="true">Inicio</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Productos
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <Link to='/category/remeras' id="remeras" className="dropdown-item" onClick={handleCategoryChange}>Remeras</Link>
                                <Link to='/category/buzos' id="buzos" className="dropdown-item" onClick={handleCategoryChange}>Buzos</Link>
                                <Link to='/category/camperas' id="camperas" className="dropdown-item" onClick={handleCategoryChange}>Camperas</Link>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact" className="nav-link" tabIndex="-1" aria-disabled="true">Contacto</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default NavBar;
