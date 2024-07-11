// src/Login.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from './firebase';
import { NavBar } from './NavBar';
import './Login.css'; // Import the CSS file

const Login = ({ setIsAuthenticated }) => {
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      setIsAuthenticated(true);
      navigate('/discuss');
    } catch (error) {
      console.error('Error logging in: ', error);
      alert('Login failed');
    }
  };

  return (
    <div>
      <NavBar />
      <div className="bg">
        <h1>Welcome To Finder  Community</h1>
        <p>Please Log In To Continue</p>
        <div className="login-container">
          
          <button onClick={handleLogin} className="btn btn-primary">Login with Google</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
