import React from 'react';
import './App.css';
import { Redirect, Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import Products from './pages/Products';
import Generic from './pages/Generic';
import CustomerOrders from './pages/CustomerOrders';
import CustomerOrdersDetails from './pages/CustomerOrderDetails';
import AppProvider from './context/AppProvider';
import Checkout from './pages/Checkout';

function App() {
  return (
    <Router>
      <AppProvider>
        <Switch>
          <Route exact path="/">
            <Redirect to="/login" />
          </Route>
          <Route exact path="/login" component={ Login } />
          <Route exact path="/register" component={ Register } />
          <Route exact path="/customer/products" component={ Products } />
          <Route exact path="/customer/checkout" component={ Checkout } />
          <Route exact path="/generic" component={ Generic } />
          <Route exact path="/customer/orders" component={ CustomerOrders } />
          <Route exact path="/customer/orders/:id" component={ CustomerOrdersDetails } />
        </Switch>
      </AppProvider>
    </Router>
  );
}

export default App;
