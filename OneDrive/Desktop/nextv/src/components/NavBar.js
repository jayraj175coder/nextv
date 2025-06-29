import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Navbar, Nav, Container, Button, Dropdown } from 'react-bootstrap';
import './NavBar.css';

export const NavBar = ({ isAuthenticated, onLogout }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = () => {
    if (onLogout) {
      onLogout();
    }
    navigate('/');
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  const navItems = [
    { path: '/', label: 'Home', icon: '🏠' },
    { path: '/find-your-college', label: 'Find College', icon: '🎓' },
    { path: '/colleges', label: 'Top Colleges', icon: '🏆' },
    { path: '/cutoff', label: 'Cutoff', icon: '📊' },
    { path: '/ai-assistant', label: 'AI Assistant', icon: '🤖' },
    { path: '/noticeboard', label: 'Notice Board', icon: '📢' },
    { path: '/contact-us', label: 'Contact', icon: '📞' },
  ];

  return (
    <Navbar 
      expand="lg" 
      className={`navbar-custom ${isScrolled ? 'scrolled' : ''}`}
      fixed="top"
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="navbar-brand">
          <div className="brand-container">
            <img 
              src="/logo192.png" 
              alt="CollegeFinder" 
              className="navbar-logo"
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/40x40/e50914/ffffff?text=CF';
              }}
            />
            <span className="brand-text">CollegeFinder</span>
          </div>
        </Navbar.Brand>

        <Navbar.Toggle 
          aria-controls="navbar-nav" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        />

        <Navbar.Collapse id="navbar-nav" className={isMobileMenuOpen ? 'show' : ''}>
          <Nav className="ms-auto">
            {navItems.map((item) => (
              <Nav.Item key={item.path}>
                <Nav.Link 
                  as={Link} 
                  to={item.path}
                  className={`nav-link ${isActive(item.path) ? 'active' : ''}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="nav-icon">{item.icon}</span>
                  {item.label}
                </Nav.Link>
              </Nav.Item>
            ))}

            {isAuthenticated ? (
              <Dropdown as={Nav.Item}>
                <Dropdown.Toggle as={Nav.Link} className="dropdown-toggle">
                  <span className="nav-icon">👤</span>
                  Account
                </Dropdown.Toggle>
                <Dropdown.Menu className="dropdown-menu">
                  <Dropdown.Item as={Link} to="/discuss">
                    <span className="dropdown-icon">💬</span>
                    Community
                  </Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item onClick={handleLogout}>
                    <span className="dropdown-icon">🚪</span>
                    Logout
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            ) : (
              <Nav.Item>
                <Button 
                  as={Link} 
                  to="/login" 
                  variant="outline-light" 
                  className="login-btn"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="nav-icon">🔐</span>
                  Login
                </Button>
              </Nav.Item>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
