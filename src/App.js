import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Componentes
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './container/ItemListContainer/ItemListContainer';

function App() {
    return (
      <div className='my-container'>
        <NavBar/>
        <ItemListContainer greeting="Bienvenido/a a mi tienda"/>
      </div>
    )
}

export default App;