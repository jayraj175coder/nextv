import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';

// Import components
import Home from './components/Home';
import Colleges from './components/Colleges';
import Cutoff from './components/Cutoff';
import ContactUs from './components/ContactUs';
import AiAssistant from './components/AiAssistant';
import Discuss from './components/Discuss';
import Login from './components/Login';
import RegionDetails from './components/RegionDetails';
import StudentDashboard from './components/StudentDashboard';
import Blog from './components/Blog';
import './App.css';
import CollegeSearch from './components/CollegeSearch';
import ProtectedRoute from './components/ProtectedRoute';
import Noticeboard from './components/Noticeboard';
import PredictCollege from './components/PredictCollege';

// Error Fallback Component
const ErrorFallback = ({ error, resetErrorBoundary }) => {
  return (
    <div className="error-container" role="alert">
      <h2>Something went wrong!</h2>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
};

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user is already authenticated (e.g., from localStorage or Firebase)
    const checkAuthStatus = () => {
      try {
        const authStatus = localStorage.getItem('isAuthenticated');
        if (authStatus === 'true') {
          setIsAuthenticated(true);
        }
      } catch (error) {
        console.error('Error checking authentication status:', error);
      } finally {
        setIsLoading(false);
      }
    };

    checkAuthStatus();
  }, []);

  const handleLogin = (status) => {
    setIsAuthenticated(status);
    localStorage.setItem('isAuthenticated', status.toString());
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('isAuthenticated');
  };

  if (isLoading) {
    return (
      <div className="loading-container">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => {
        // Reset the state of your app here
        window.location.reload();
      }}
    >
      <Router basename={process.env.PUBLIC_URL}>
        <div className="App">
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home isAuthenticated={isAuthenticated} onLogout={handleLogout} />} />
            <Route path="/colleges" element={<Colleges />} />
            <Route path="/cutoff" element={<Cutoff />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/ai-assistant" element={<AiAssistant />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/colleges/:region" element={<RegionDetails />} />
            <Route path="/find-your-college" element={<CollegeSearch />} />
            <Route path="/noticeboard" element={<Noticeboard />} />
            <Route path="/Predictclg" element={<PredictCollege />} />
            
            {/* Authentication Routes */}
            <Route 
              path="/login" 
              element={
                isAuthenticated ? 
                <Navigate to="/" replace /> : 
                <Login setIsAuthenticated={handleLogin} />
              } 
            />
            
            {/* Protected Routes */}
            <Route 
              path="/discuss" 
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <Discuss onLogout={handleLogout} />
                </ProtectedRoute>
              } 
            />
            
            <Route 
              path="/dashboard" 
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <StudentDashboard onLogout={handleLogout} />
                </ProtectedRoute>
              } 
            />
            
            {/* Catch all route - redirect to home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </Router>
    </ErrorBoundary>
  );
};

export default App;
