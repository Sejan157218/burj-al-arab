import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Book from './components/Book/Book';
import Header from './components/Header/Header';
import AuthProvider from './components/Context/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';

function App() {
  return (
    <AuthProvider>
      <Router>
          <Header/>
          <Switch>
          <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <PrivateRoute path="/order">
              <PlaceOrder />
            </PrivateRoute>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/book/:bedType">
              <Book />
            </Route>
          </Switch>
      </Router>
      </AuthProvider>
  );
}
export default App;
