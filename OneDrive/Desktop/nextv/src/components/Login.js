// src/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from './firebase';
import { NavBar } from './NavBar';
import { Container, Row, Col, Card, Button, Alert, Spinner } from 'react-bootstrap';
import './Login.css'; // Import the CSS file

const Login = ({ setIsAuthenticated }) => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async () => {
    setIsLoading(true);
    setError('');
    
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log('Login successful:', result.user.email);
      setIsAuthenticated(true);
      navigate('/discuss');
    } catch (error) {
      console.error('Error logging in:', error);
      setError(
        error.code === 'auth/popup-closed-by-user' 
          ? 'Login was cancelled. Please try again.' 
          : 'Login failed. Please check your internet connection and try again.'
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleGuestLogin = () => {
    setIsAuthenticated(true);
    navigate('/');
  };

  return (
    <div className="login-page">
      <NavBar />
      
      <div className="login-background">
        <Container className="login-container">
          <Row className="justify-content-center align-items-center min-vh-100">
            <Col lg={6} md={8} sm={12}>
              <Card className="login-card">
                <Card.Body className="p-5">
                  <div className="text-center mb-4">
                    <div className="login-icon">🔐</div>
                    <h1 className="login-title">Welcome to CollegeFinder</h1>
                    <p className="login-subtitle">
                      Join our community to access exclusive features and connect with fellow students
                    </p>
                  </div>

                  {error && (
                    <Alert variant="danger" className="mb-4">
                      <Alert.Heading>Login Error</Alert.Heading>
                      <p>{error}</p>
                    </Alert>
                  )}

                  <div className="login-options">
                    <Button
                      onClick={handleLogin}
                      disabled={isLoading}
                      variant="primary"
                      size="lg"
                      className="login-btn google-btn w-100 mb-3"
                    >
                      {isLoading ? (
                        <>
                          <Spinner
                            as="span"
                            animation="border"
                            size="sm"
                            role="status"
                            aria-hidden="true"
                            className="me-2"
                          />
                          Signing in...
                        </>
                      ) : (
                        <>
                          <span className="btn-icon">🔍</span>
                          Continue with Google
                        </>
                      )}
                    </Button>

                    <div className="divider">
                      <span>or</span>
                    </div>

                    <Button
                      onClick={handleGuestLogin}
                      variant="outline-secondary"
                      size="lg"
                      className="login-btn guest-btn w-100"
                    >
                      <span className="btn-icon">👤</span>
                      Continue as Guest
                    </Button>
                  </div>

                  <div className="login-features mt-4">
                    <h5 className="features-title">What you'll get:</h5>
                    <ul className="features-list">
                      <li>
                        <span className="feature-icon">💬</span>
                        Access to community discussions
                      </li>
                      <li>
                        <span className="feature-icon">🎯</span>
                        Personalized college recommendations
                      </li>
                      <li>
                        <span className="feature-icon">📊</span>
                        Detailed cutoff analysis
                      </li>
                      <li>
                        <span className="feature-icon">🤖</span>
                        AI-powered assistance
                      </li>
                    </ul>
                  </div>

                  <div className="login-footer text-center mt-4">
                    <p className="text-muted">
                      By continuing, you agree to our{' '}
                      <a href="/terms" className="footer-link">Terms of Service</a>
                      {' '}and{' '}
                      <a href="/privacy" className="footer-link">Privacy Policy</a>
                    </p>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Login;
