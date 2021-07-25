import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

// Views
import Home from './views/Home';
import Contact from './views/Contact';
import Products from './views/Products';
import Detail from './views/Detail';

// Components
import NavBar from './components/NavBar/NavBar';
import {CartProvider} from './context/CartContext';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';


function App() {
    return (
      <CartProvider>
        <Router>
            <NavBar/>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/contact" component={Contact} />
              <Route path="/detail/:id" component={Detail} />
              <Route path="/category/:name" component={Products} />
              <Route path="/cart" component={Cart} />
              <Route path="/checkout" component={Checkout} />
            </Switch>
        </Router>
      </CartProvider>
    )
}

export default App;