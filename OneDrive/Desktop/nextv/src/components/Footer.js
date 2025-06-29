import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const socialLinks = [
    {
      name: 'Facebook',
      icon: '📘',
      url: 'https://facebook.com',
      color: '#1877f2'
    },
    {
      name: 'Instagram',
      icon: '📷',
      url: 'https://instagram.com',
      color: '#e4405f'
    },
    {
      name: 'Twitter',
      icon: '🐦',
      url: 'https://twitter.com',
      color: '#1da1f2'
    },
    {
      name: 'YouTube',
      icon: '📺',
      url: 'https://youtube.com',
      color: '#ff0000'
    },
    {
      name: 'LinkedIn',
      icon: '💼',
      url: 'https://linkedin.com',
      color: '#0077b5'
    }
  ];

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Find College', path: '/find-your-college' },
    { name: 'Top Colleges', path: '/colleges' },
    { name: 'Cutoff Analysis', path: '/cutoff' },
    { name: 'AI Assistant', path: '/ai-assistant' },
    { name: 'Notice Board', path: '/noticeboard' },
    { name: 'Contact Us', path: '/contact-us' }
  ];

  const features = [
    'College Search & Filter',
    'AI-Powered Recommendations',
    'Cutoff Analysis',
    'Community Discussions',
    'Real-time Updates',
    'Mobile Responsive'
  ];

  return (
    <footer className="footer">
      <Container>
        {/* Main Footer Content */}
        <Row className="footer-content">
          {/* Company Info */}
          <Col lg={4} md={6} sm={12} className="mb-4">
            <div className="footer-section">
              <h3 className="footer-title">
                <span className="brand-text">CollegeFinder</span>
              </h3>
              <p className="footer-description">
                We help students find their perfect college with AI-powered insights, 
                comprehensive cutoff analysis, and a supportive community. Our platform 
                makes college selection easier and more informed.
              </p>
              <div className="social-links">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    style={{ '--social-color': social.color }}
                    aria-label={`Follow us on ${social.name}`}
                  >
                    <span className="social-icon">{social.icon}</span>
                  </a>
                ))}
              </div>
            </div>
          </Col>

          {/* Quick Links */}
          <Col lg={2} md={6} sm={12} className="mb-4">
            <div className="footer-section">
              <h4 className="footer-subtitle">Quick Links</h4>
              <ul className="footer-links">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link to={link.path} className="footer-link">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Col>

          {/* Features */}
          <Col lg={3} md={6} sm={12} className="mb-4">
            <div className="footer-section">
              <h4 className="footer-subtitle">Features</h4>
              <ul className="footer-features">
                {features.map((feature, index) => (
                  <li key={index} className="feature-item">
                    <span className="feature-icon">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </Col>

          {/* Contact Info */}
          <Col lg={3} md={6} sm={12} className="mb-4">
            <div className="footer-section">
              <h4 className="footer-subtitle">Contact Info</h4>
              <div className="contact-info">
                <div className="contact-item">
                  <span className="contact-icon">📧</span>
                  <div>
                    <strong>Email:</strong>
                    <br />
                    <a href="mailto:jayrajsanas175@gmail.com" className="contact-link">
                      jayrajsanas175@gmail.com
                    </a>
                  </div>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">🌐</span>
                  <div>
                    <strong>Website:</strong>
                    <br />
                    <a href="https://jayraj175coder.github.io/nextv/" className="contact-link">
                      collegefinder.com
                    </a>
                  </div>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📍</span>
                  <div>
                    <strong>Location:</strong>
                    <br />
                    Maharashtra, India
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>

        {/* Bottom Footer */}
        <Row className="footer-bottom">
          <Col md={6} sm={12}>
            <p className="copyright">
              © {currentYear} <strong>CollegeFinder</strong>. All rights reserved.
            </p>
          </Col>
          <Col md={6} sm={12} className="text-md-end">
            <div className="footer-bottom-links">
              <Link to="/privacy" className="footer-bottom-link">Privacy Policy</Link>
              <Link to="/terms" className="footer-bottom-link">Terms of Service</Link>
              <Link to="/contact-us" className="footer-bottom-link">Support</Link>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Scroll to Top Button */}
      <Button
        onClick={scrollToTop}
        className="scroll-to-top"
        aria-label="Scroll to top"
      >
        ↑
      </Button>
    </footer>
  );
};

export default Footer;
