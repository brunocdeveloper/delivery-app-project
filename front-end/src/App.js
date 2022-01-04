import React from 'react';
import './App.css';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import AppProvider from './context/AppProvider';

function App() {
  return (
    <Router>
      <AppProvider>
        <Switch>
          <Route exact path="/" component={ Login } />
          <Route exact path="/register" component={ Register } />
        </Switch>
      </AppProvider>
    </Router>
  );
}

export default App;
