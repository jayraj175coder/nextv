import React, { useState, useEffect } from 'react';
import { NavBar } from './NavBar';
import Footer from './Footer';
import { Container, Row, Col, Card, Badge, Button, Form, Modal, Alert, Spinner, InputGroup } from 'react-bootstrap';
import './Noticeboard.css';

const Noticeboard = () => {
  const [notices, setNotices] = useState([]);
  const [filteredNotices, setFilteredNotices] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [newNotice, setNewNotice] = useState({
    title: '',
    content: '',
    category: 'General',
    priority: 'Normal',
    expiryDate: ''
  });

  const categories = ['All', 'Admission', 'Exam', 'Results', 'Events', 'General', 'Urgent'];

  // Simulated real-time notices with more realistic data
  const initialNotices = [
    {
      id: 1,
      title: 'MHT-CET 2024 Registration Extended - Last Date: 15th March 2024',
      content: 'The Maharashtra Common Entrance Test (MHT-CET) 2024 registration deadline has been extended. All engineering aspirants can now register until March 15th, 2024. Late fees will apply after March 10th.',
      category: 'Admission',
      priority: 'Urgent',
      date: '2024-01-15',
      expiryDate: '2024-03-15',
      author: 'MHT-CET Cell',
      views: 15420,
      isActive: true
    },
    {
      id: 2,
      title: 'COEP Admission 2024: Application Process Started',
      content: 'College of Engineering, Pune (COEP) has started accepting applications for the academic year 2024-25. Apply online through the official website. Document verification will begin from February 1st.',
      category: 'Admission',
      priority: 'High',
      date: '2024-01-14',
      expiryDate: '2024-02-28',
      author: 'COEP Admission Office',
      views: 12850,
      isActive: true
    },
    {
      id: 3,
      title: 'VJTI Mumbai: New Computer Science Specialization Announced',
      content: 'VJTI Mumbai introduces a new specialization in Artificial Intelligence and Machine Learning for Computer Engineering students. The program will start from the 2024-25 academic year.',
      category: 'General',
      priority: 'Normal',
      date: '2024-01-13',
      expiryDate: '2024-06-30',
      author: 'VJTI Mumbai',
      views: 8760,
      isActive: true
    },
    {
      id: 4,
      title: 'MHT-CET 2024 Exam Pattern Changes',
      content: 'Important changes in MHT-CET 2024 exam pattern: Increased weightage for Mathematics (50%), Physics (30%), Chemistry (20%). Total duration remains 3 hours.',
      category: 'Exam',
      priority: 'High',
      date: '2024-01-12',
      expiryDate: '2024-05-31',
      author: 'MHT-CET Cell',
      views: 11230,
      isActive: true
    },
    {
      id: 5,
      title: 'SPIT Mumbai: Campus Placement Drive Results',
      content: 'Sardar Patel Institute of Technology, Mumbai announces excellent placement results for 2024. Average package: 8.5 LPA, Highest package: 22 LPA. 95% placement rate achieved.',
      category: 'Results',
      priority: 'Normal',
      date: '2024-01-11',
      expiryDate: '2024-12-31',
      author: 'SPIT Placement Cell',
      views: 9870,
      isActive: true
    },
    {
      id: 6,
      title: 'Engineering College Fest 2024: Registration Open',
      content: 'Annual Engineering College Fest 2024 will be held from March 15-17, 2024. Technical competitions, cultural events, and workshops. Register now to participate.',
      category: 'Events',
      priority: 'Normal',
      date: '2024-01-10',
      expiryDate: '2024-03-10',
      author: 'College Fest Committee',
      views: 6540,
      isActive: true
    },
    {
      id: 7,
      title: 'Important: Document Verification Deadline Extended',
      content: 'Document verification deadline for all engineering colleges has been extended until January 31st, 2024. Ensure all documents are uploaded and verified.',
      category: 'Admission',
      priority: 'Urgent',
      date: '2024-01-09',
      expiryDate: '2024-01-31',
      author: 'Admission Authority',
      views: 13450,
      isActive: true
    },
    {
      id: 8,
      title: 'PICT Pune: New Research Center Inauguration',
      content: 'Pune Institute of Computer Technology inaugurates new Research Center for Emerging Technologies. Facilities include AI/ML labs, IoT workshops, and innovation hub.',
      category: 'General',
      priority: 'Normal',
      date: '2024-01-08',
      expiryDate: '2024-12-31',
      author: 'PICT Administration',
      views: 5430,
      isActive: true
    }
  ];

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setNotices(initialNotices);
      setFilteredNotices(initialNotices);
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Filter notices based on search and category
    let filtered = notices.filter(notice => {
      const matchesSearch = notice.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           notice.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           notice.author.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || notice.category === selectedCategory;
      return matchesSearch && matchesCategory && notice.isActive;
    });

    // Sort by priority and date
    filtered.sort((a, b) => {
      const priorityOrder = { 'Urgent': 3, 'High': 2, 'Normal': 1 };
      const priorityDiff = priorityOrder[b.priority] - priorityOrder[a.priority];
      if (priorityDiff !== 0) return priorityDiff;
      return new Date(b.date) - new Date(a.date);
    });

    setFilteredNotices(filtered);
  }, [notices, searchTerm, selectedCategory]);

  const handleAddNotice = () => {
    const notice = {
      id: Date.now(),
      ...newNotice,
      date: new Date().toISOString().split('T')[0],
      author: 'Admin',
      views: 0,
      isActive: true
    };

    setNotices([notice, ...notices]);
    setNewNotice({
      title: '',
      content: '',
      category: 'General',
      priority: 'Normal',
      expiryDate: ''
    });
    setShowAddModal(false);
  };

  const handleDeleteNotice = (id) => {
    setNotices(notices.map(notice => 
      notice.id === id ? { ...notice, isActive: false } : notice
    ));
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'Urgent': return 'danger';
      case 'High': return 'warning';
      case 'Normal': return 'info';
      default: return 'secondary';
    }
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case 'Admission': return 'primary';
      case 'Exam': return 'warning';
      case 'Results': return 'success';
      case 'Events': return 'info';
      case 'Urgent': return 'danger';
      default: return 'secondary';
    }
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  const formatViews = (views) => {
    if (views >= 1000) {
      return (views / 1000).toFixed(1) + 'K';
    }
    return views.toString();
  };

  const isExpired = (expiryDate) => {
    return new Date(expiryDate) < new Date();
  };

  if (isLoading) {
    return (
      <div className="noticeboard-page">
        <NavBar />
        <Container className="loading-container">
          <div className="text-center">
            <Spinner animation="border" role="status" className="mb-3">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
            <h5>Loading latest notices...</h5>
          </div>
        </Container>
        <Footer />
      </div>
    );
  }

  return (
    <div className="noticeboard-page">
      <NavBar />
      
      <Container className="noticeboard-container">
        {/* Header */}
        <Row className="mb-4">
          <Col>
            <h1 className="noticeboard-title">📢 Notice Board</h1>
            <p className="noticeboard-subtitle">Stay updated with the latest college announcements and important information</p>
          </Col>
        </Row>

        {/* Search and Filter */}
        <Row className="mb-4">
          <Col lg={8} md={12} className="mb-3">
            <InputGroup>
              <Form.Control
                type="text"
                placeholder="Search notices..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
              <Button variant="primary" className="search-btn">
                🔍 Search
              </Button>
            </InputGroup>
          </Col>
          <Col lg={4} md={12}>
            <Form.Select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="category-select"
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </Form.Select>
          </Col>
        </Row>

        {/* Stats */}
        <Row className="mb-4">
          <Col lg={3} md={6} className="mb-3">
            <Card className="stats-card">
              <Card.Body className="text-center">
                <div className="stats-icon">📋</div>
                <h3>{filteredNotices.length}</h3>
                <p>Active Notices</p>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={3} md={6} className="mb-3">
            <Card className="stats-card">
              <Card.Body className="text-center">
                <div className="stats-icon">🚨</div>
                <h3>{filteredNotices.filter(n => n.priority === 'Urgent').length}</h3>
                <p>Urgent Notices</p>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={3} md={6} className="mb-3">
            <Card className="stats-card">
              <Card.Body className="text-center">
                <div className="stats-icon">🎓</div>
                <h3>{filteredNotices.filter(n => n.category === 'Admission').length}</h3>
                <p>Admission Updates</p>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={3} md={6} className="mb-3">
            <Card className="stats-card">
              <Card.Body className="text-center">
                <div className="stats-icon">👁️</div>
                <h3>{formatViews(filteredNotices.reduce((acc, n) => acc + n.views, 0))}</h3>
                <p>Total Views</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Notices */}
        <Row>
          {filteredNotices.length === 0 ? (
            <Col>
              <Alert variant="info" className="text-center">
                <h5>No notices found</h5>
                <p>Try adjusting your search criteria or check back later for new updates.</p>
              </Alert>
            </Col>
          ) : (
            filteredNotices.map((notice) => (
              <Col lg={6} md={12} key={notice.id} className="mb-4">
                <Card className={`notice-card ${isExpired(notice.expiryDate) ? 'expired' : ''}`}>
                  <Card.Header className="notice-header">
                    <div className="notice-meta">
                      <Badge bg={getPriorityColor(notice.priority)} className="priority-badge">
                        {notice.priority}
                      </Badge>
                      <Badge bg={getCategoryColor(notice.category)} className="category-badge">
                        {notice.category}
                      </Badge>
                    </div>
                    <div className="notice-date">
                      {formatDate(notice.date)}
                    </div>
                  </Card.Header>
                  <Card.Body>
                    <Card.Title className="notice-title">{notice.title}</Card.Title>
                    <Card.Text className="notice-content">{notice.content}</Card.Text>
                    
                    <div className="notice-footer">
                      <div className="notice-author">
                        <span className="author-label">By:</span>
                        <span className="author-name">{notice.author}</span>
                      </div>
                      <div className="notice-stats">
                        <span className="views">👁️ {formatViews(notice.views)}</span>
                        {isExpired(notice.expiryDate) && (
                          <Badge bg="secondary" className="expired-badge">Expired</Badge>
                        )}
                      </div>
                    </div>
                  </Card.Body>
                  <Card.Footer className="notice-actions">
                    <Button variant="outline-primary" size="sm" className="me-2">
                      📖 Read More
                    </Button>
                    <Button variant="outline-success" size="sm" className="me-2">
                      📱 Share
                    </Button>
                    <Button 
                      variant="outline-danger" 
                      size="sm"
                      onClick={() => handleDeleteNotice(notice.id)}
                    >
                      🗑️ Delete
                    </Button>
                  </Card.Footer>
                </Card>
              </Col>
            ))
          )}
        </Row>

        {/* Add Notice Button */}
        <Row className="mt-4">
          <Col className="text-center">
            <Button 
              variant="success" 
              size="lg"
              onClick={() => setShowAddModal(true)}
              className="add-notice-btn"
            >
              ➕ Add New Notice
            </Button>
          </Col>
        </Row>
      </Container>

      {/* Add Notice Modal */}
      <Modal show={showAddModal} onHide={() => setShowAddModal(false)} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Add New Notice</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Notice Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter notice title"
                value={newNotice.title}
                onChange={(e) => setNewNotice({...newNotice, title: e.target.value})}
              />
            </Form.Group>
            
            <Form.Group className="mb-3">
              <Form.Label>Content</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="Enter notice content"
                value={newNotice.content}
                onChange={(e) => setNewNotice({...newNotice, content: e.target.value})}
              />
            </Form.Group>
            
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Category</Form.Label>
                  <Form.Select
                    value={newNotice.category}
                    onChange={(e) => setNewNotice({...newNotice, category: e.target.value})}
                  >
                    <option value="General">General</option>
                    <option value="Admission">Admission</option>
                    <option value="Exam">Exam</option>
                    <option value="Results">Results</option>
                    <option value="Events">Events</option>
                    <option value="Urgent">Urgent</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Priority</Form.Label>
                  <Form.Select
                    value={newNotice.priority}
                    onChange={(e) => setNewNotice({...newNotice, priority: e.target.value})}
                  >
                    <option value="Normal">Normal</option>
                    <option value="High">High</option>
                    <option value="Urgent">Urgent</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>
            
            <Form.Group className="mb-3">
              <Form.Label>Expiry Date</Form.Label>
              <Form.Control
                type="date"
                value={newNotice.expiryDate}
                onChange={(e) => setNewNotice({...newNotice, expiryDate: e.target.value})}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowAddModal(false)}>
            Cancel
          </Button>
          <Button variant="success" onClick={handleAddNotice}>
            Add Notice
          </Button>
        </Modal.Footer>
      </Modal>
      
      <Footer />
    </div>
  );
};

export default Noticeboard;
