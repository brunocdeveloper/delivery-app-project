import React from 'react';
import './App.css';
import { Redirect, Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
        <Route exact path="/login" component={ Login } />
      </Switch>
    </Router>
  );
}

export default App;
