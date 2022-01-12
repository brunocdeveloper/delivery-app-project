import React from 'react';
import './App.css';
import { Redirect, Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import Admin from './pages/Admin';
import Products from './pages/Products';
import CustomerOrders from './pages/CustomerOrders';
import OrderDetails from './pages/OrderDetails';
import AppProvider from './context/AppProvider';
import Checkout from './pages/Checkout';
import Orders from './pages/Orders';

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
          <Route exact path="/customer/orders/:id" component={ OrderDetails } />
          <Route exact path="/customer/products" component={ Products } />
          <Route exact path="/customer/checkout" component={ Checkout } />
          <Route exact path="/seller/orders" component={ Orders } />
          <Route exact path="/customer/orders" component={ CustomerOrders } />
          <Route exact path="/admin" component={ Admin } />
        </Switch>
      </AppProvider>
    </Router>
  );
}

export default App;
