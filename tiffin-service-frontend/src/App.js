import React, { useEffect, useContext } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import Home from './components/Home';
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';
import Menu from './components/Menu/Menu';
import Orders from './components/Orders/Orders';
import Review from './components/Orders/Review';
import AuthState from './context/AuthState';
import setAuthToken from './utils/setAuthToken';
import PrivateRoute from './components/routing/PrivateRoute';
import AuthContext from './context/AuthContext';
import './App.css';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  return (
    <AuthState>
      <AuthProviderComponent />
    </AuthState>
  );
};

const AuthProviderComponent = () => {
  const authContext = useContext(AuthContext);

  useEffect(() => {
    authContext.loadUser();
    // eslint-disable-next-line
  }, []);

  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/menu" element={<PrivateRoute element={<Menu />} />} />
          <Route exact path="/orders" element={<PrivateRoute element={<Orders />} />} />
          <Route exact path="/orders/:id/review" element={<PrivateRoute element={<Review />} />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
