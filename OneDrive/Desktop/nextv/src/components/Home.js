// src/Home.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css'; // Assuming you have a CSS file for styles
import { NavBar } from './NavBar';
import Footer from './Footer';
import Noticeboard from './Noticeboard';
import AnimatedBackground from './AnimatedBackground';

const Home = ({ isAuthenticated, onLogout }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      id: 1,
      title: 'Top Colleges',
      description: 'Discover the best colleges reviewed across all aspects including academics, infrastructure, and placement records.',
      image: '/assests/Topcolleges.png',
      link: '/colleges',
      icon: '🏆'
    },
    {
      id: 2,
      title: 'Cutoff Analysis',
      description: 'Access comprehensive cutoff data from previous years for all colleges across Maharashtra.',
      image: '/assests/Cutoff.png',
      link: '/cutoff',
      icon: '📊'
    },
    {
      id: 3,
      title: 'Educational Blog',
      description: 'Stay informed with our comprehensive blog covering all important aspects of college admissions.',
      image: '/assests/Blog.jpg',
      link: 'https://medium.com/@jayrajsanas175/dsy-engineering-complete-guide-a239e712aa58',
      icon: '📝',
      external: true
    },
    {
      id: 4,
      title: 'College Predictor',
      description: 'Get AI-powered predictions for your college admissions based on your scores and preferences.',
      image: '/assests/CollegeFinder.png',
      link: '/Predictclg',
      icon: '🎯'
    }
  ];

  const handleImageError = (e) => {
    e.target.src = 'https://via.placeholder.com/300x200/e50914/ffffff?text=CollegeFinder';
  };

  return (
    <div className="home-container">
      <NavBar isAuthenticated={isAuthenticated} onLogout={onLogout} />
      <AnimatedBackground />
      
      {/* Hero Section */}
      <section className={`hero fade-in ${isVisible ? 'visible' : ''}`}>
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Take Your First Step
              <span className="highlight"> Towards Success</span>
            </h1>
            <h2 className="hero-subtitle">
              Discover Your Perfect College with AI-Powered Insights
            </h2>
            <p className="hero-description">
              Our comprehensive platform helps you find the best colleges with minimal effort. 
              Get personalized recommendations, analyze cutoffs, and connect with the community.
            </p>
            <div className="hero-buttons">
              <Button 
                as={Link} 
                to="/find-your-college" 
                variant="primary" 
                size="lg"
                className="hero-btn primary"
              >
                🎓 Find Your College
              </Button>
              <Button 
                as={Link} 
                to="/ai-assistant" 
                variant="outline-light" 
                size="lg"
                className="hero-btn secondary"
              >
                🤖 AI Assistant
              </Button>
            </div>
          </div>
          <div className="hero-image">
            <img 
              src="/assests/CollegeTempBg.png" 
              alt="College Finder Platform"
              onError={handleImageError}
              className="hero-img"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <Container>
          <div className="section-header text-center mb-5">
            <h2 className="section-title">Everything You Need to Find Your Perfect College</h2>
            <p className="section-subtitle">
              Comprehensive tools and resources to make your college search easier and more effective
            </p>
          </div>
          
          <Row className="g-4">
            {features.map((feature, index) => (
              <Col key={feature.id} lg={3} md={6} sm={12}>
                <Card className={`feature-card slide-in-${index % 2 === 0 ? 'left' : 'right'}`}>
                  <div className="card-image-container">
                    <img 
                      src={feature.image} 
                      alt={feature.title}
                      className="card-img-top"
                      onError={handleImageError}
                    />
                    <div className="card-icon">{feature.icon}</div>
                  </div>
                  <Card.Body className="text-center">
                    <Card.Title className="feature-title">{feature.title}</Card.Title>
                    <Card.Text className="feature-description">
                      {feature.description}
                    </Card.Text>
                    {feature.external ? (
                      <a 
                        href={feature.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="btn btn-primary custom-button"
                      >
                        Read More
                      </a>
                    ) : (
                      <Button 
                        as={Link} 
                        to={feature.link} 
                        variant="primary"
                        className="custom-button"
                      >
                        Explore
                      </Button>
                    )}
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Notice Board Section */}
      <section className="notice-section">
        <Container>
          <Noticeboard />
        </Container>
      </section>

      {/* Community Section */}
      <section className="community-section">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} md={12} className="mb-4">
              <div className="community-content">
                <h2 className="community-title">Join Our Community</h2>
                <div className="community-features">
                  <div className="feature-item">
                    <span className="feature-icon">🔐</span>
                    <span className="feature-text">Login to access the community</span>
                  </div>
                  <div className="feature-item">
                    <span className="feature-icon">💬</span>
                    <span className="feature-text">Ask questions and get answers</span>
                  </div>
                  <div className="feature-item">
                    <span className="feature-icon">🤝</span>
                    <span className="feature-text">Connect with fellow students</span>
                  </div>
                </div>
                <p className="community-description">
                  Our Query Resolution Community is a collaborative platform where students can share 
                  experiences, ask questions, and get valuable insights from peers and experts.
                </p>
                <Button 
                  as={Link} 
                  to="/discuss" 
                  variant="success" 
                  size="lg"
                  className="community-btn"
                >
                  Join Discussion
                </Button>
              </div>
            </Col>
            <Col lg={6} md={12}>
              <div className="community-image">
                <img 
                  src="/assests/Discuss.jpg" 
                  alt="Community Discussion"
                  onError={handleImageError}
                  className="community-img"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
