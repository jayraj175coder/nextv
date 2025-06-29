import React, { useState, useEffect } from 'react';
import { NavBar } from './NavBar';
import Footer from './Footer';
import { Container, Row, Col, Card, ProgressBar, Badge, Button, Table, Form, Modal, Alert } from 'react-bootstrap';
import './StudentDashboard.css';

const StudentDashboard = () => {
  const [user, setUser] = useState({
    name: 'Rahul Sharma',
    email: 'rahul.sharma@email.com',
    phone: '+91 98765 43210',
    cetMarks: 92,
    category: 'Open',
    region: 'Mumbai',
    preferredBranches: ['Computer Engineering', 'Information Technology'],
    applications: [],
    wishlist: []
  });

  const [applications, setApplications] = useState([
    {
      id: 1,
      college: 'COEP',
      branch: 'Computer Engineering',
      status: 'Applied',
      appliedDate: '2024-01-15',
      cutoff: 97,
      userMarks: 92,
      chance: 'Low',
      priority: 1
    },
    {
      id: 2,
      college: 'VJTI',
      branch: 'Information Technology',
      status: 'Applied',
      appliedDate: '2024-01-10',
      cutoff: 95,
      userMarks: 92,
      chance: 'Medium',
      priority: 2
    },
    {
      id: 3,
      college: 'SPIT',
      branch: 'Computer Engineering',
      status: 'Shortlisted',
      appliedDate: '2024-01-05',
      cutoff: 94,
      userMarks: 92,
      chance: 'High',
      priority: 3
    }
  ]);

  const [wishlist, setWishlist] = useState([
    {
      id: 1,
      college: 'PICT',
      branch: 'Computer Engineering',
      cutoff: 92,
      rating: 4.5,
      package: '6-10 LPA',
      location: 'Pune'
    },
    {
      id: 2,
      college: 'VIT',
      branch: 'Information Technology',
      cutoff: 89,
      rating: 4.4,
      package: '5-9 LPA',
      location: 'Pune'
    }
  ]);

  const [showProfileModal, setShowProfileModal] = useState(false);
  const [showApplicationModal, setShowApplicationModal] = useState(false);
  const [newApplication, setNewApplication] = useState({
    college: '',
    branch: '',
    priority: 1
  });

  // Analytics data
  const analytics = {
    totalApplications: applications.length,
    shortlisted: applications.filter(app => app.status === 'Shortlisted').length,
    accepted: applications.filter(app => app.status === 'Accepted').length,
    averageChance: applications.reduce((acc, app) => {
      const chances = { 'Low': 0.3, 'Medium': 0.6, 'High': 0.9 };
      return acc + chances[app.chance];
    }, 0) / applications.length
  };

  const getChanceColor = (chance) => {
    switch (chance) {
      case 'High': return 'success';
      case 'Medium': return 'warning';
      case 'Low': return 'danger';
      default: return 'secondary';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Accepted': return 'success';
      case 'Shortlisted': return 'warning';
      case 'Applied': return 'info';
      case 'Rejected': return 'danger';
      default: return 'secondary';
    }
  };

  const handleAddApplication = () => {
    const application = {
      id: Date.now(),
      ...newApplication,
      status: 'Applied',
      appliedDate: new Date().toISOString().split('T')[0],
      cutoff: Math.floor(Math.random() * 10) + 85,
      userMarks: user.cetMarks,
      chance: Math.random() > 0.5 ? 'Medium' : 'Low'
    };
    
    setApplications([...applications, application]);
    setNewApplication({ college: '', branch: '', priority: 1 });
    setShowApplicationModal(false);
  };

  const handleRemoveFromWishlist = (id) => {
    setWishlist(wishlist.filter(item => item.id !== id));
  };

  return (
    <div className="dashboard-page">
      <NavBar />
      
      <Container className="dashboard-container">
        {/* Header */}
        <Row className="mb-4">
          <Col>
            <h1 className="dashboard-title">🎓 Student Dashboard</h1>
            <p className="dashboard-subtitle">Track your college applications and progress</p>
          </Col>
        </Row>

        {/* Analytics Cards */}
        <Row className="mb-4">
          <Col lg={3} md={6} className="mb-3">
            <Card className="analytics-card">
              <Card.Body>
                <div className="analytics-icon">📝</div>
                <h3>{analytics.totalApplications}</h3>
                <p>Total Applications</p>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={3} md={6} className="mb-3">
            <Card className="analytics-card">
              <Card.Body>
                <div className="analytics-icon">✅</div>
                <h3>{analytics.shortlisted}</h3>
                <p>Shortlisted</p>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={3} md={6} className="mb-3">
            <Card className="analytics-card">
              <Card.Body>
                <div className="analytics-icon">🎉</div>
                <h3>{analytics.accepted}</h3>
                <p>Accepted</p>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={3} md={6} className="mb-3">
            <Card className="analytics-card">
              <Card.Body>
                <div className="analytics-icon">📊</div>
                <h3>{(analytics.averageChance * 100).toFixed(0)}%</h3>
                <p>Avg. Success Rate</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row>
          {/* Profile Section */}
          <Col lg={4} md={12} className="mb-4">
            <Card className="profile-card">
              <Card.Header>
                <h5>👤 Your Profile</h5>
                <Button 
                  variant="outline-primary" 
                  size="sm"
                  onClick={() => setShowProfileModal(true)}
                >
                  Edit
                </Button>
              </Card.Header>
              <Card.Body>
                <div className="profile-info">
                  <p><strong>Name:</strong> {user.name}</p>
                  <p><strong>Email:</strong> {user.email}</p>
                  <p><strong>Phone:</strong> {user.phone}</p>
                  <p><strong>CET Marks:</strong> {user.cetMarks}</p>
                  <p><strong>Category:</strong> {user.category}</p>
                  <p><strong>Region:</strong> {user.region}</p>
                </div>
                
                <div className="preferred-branches">
                  <h6>Preferred Branches:</h6>
                  {user.preferredBranches.map((branch, index) => (
                    <Badge key={index} bg="primary" className="me-2 mb-2">
                      {branch}
                    </Badge>
                  ))}
                </div>

                <div className="progress-section">
                  <h6>Application Progress</h6>
                  <ProgressBar 
                    now={(analytics.shortlisted / analytics.totalApplications) * 100} 
                    className="mb-2"
                  />
                  <small>{analytics.shortlisted} of {analytics.totalApplications} applications shortlisted</small>
                </div>
              </Card.Body>
            </Card>
          </Col>

          {/* Applications Section */}
          <Col lg={8} md={12}>
            <Card className="applications-card">
              <Card.Header>
                <h5>📋 My Applications</h5>
                <Button 
                  variant="success" 
                  size="sm"
                  onClick={() => setShowApplicationModal(true)}
                >
                  + Add Application
                </Button>
              </Card.Header>
              <Card.Body>
                {applications.length === 0 ? (
                  <Alert variant="info">
                    No applications yet. Start by adding your first college application!
                  </Alert>
                ) : (
                  <Table responsive>
                    <thead>
                      <tr>
                        <th>College</th>
                        <th>Branch</th>
                        <th>Status</th>
                        <th>Chance</th>
                        <th>Applied Date</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {applications.map((app) => (
                        <tr key={app.id}>
                          <td>
                            <strong>{app.college}</strong>
                            <br />
                            <small className="text-muted">Cutoff: {app.cutoff}</small>
                          </td>
                          <td>{app.branch}</td>
                          <td>
                            <Badge bg={getStatusColor(app.status)}>
                              {app.status}
                            </Badge>
                          </td>
                          <td>
                            <Badge bg={getChanceColor(app.chance)}>
                              {app.chance}
                            </Badge>
                          </td>
                          <td>{app.appliedDate}</td>
                          <td>
                            <Button variant="outline-primary" size="sm" className="me-1">
                              View
                            </Button>
                            <Button variant="outline-danger" size="sm">
                              Remove
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                )}
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Wishlist Section */}
        <Row className="mt-4">
          <Col>
            <Card className="wishlist-card">
              <Card.Header>
                <h5>⭐ My Wishlist</h5>
              </Card.Header>
              <Card.Body>
                {wishlist.length === 0 ? (
                  <Alert variant="info">
                    Your wishlist is empty. Add colleges you're interested in!
                  </Alert>
                ) : (
                  <Row>
                    {wishlist.map((item) => (
                      <Col lg={6} md={12} key={item.id} className="mb-3">
                        <Card className="wishlist-item">
                          <Card.Body>
                            <div className="d-flex justify-content-between align-items-start">
                              <div>
                                <h6>{item.college}</h6>
                                <p className="text-muted mb-1">{item.branch}</p>
                                <p className="mb-1">
                                  <Badge bg="info" className="me-2">Cutoff: {item.cutoff}</Badge>
                                  <Badge bg="success" className="me-2">⭐ {item.rating}</Badge>
                                  <Badge bg="warning">{item.package}</Badge>
                                </p>
                                <small className="text-muted">{item.location}</small>
                              </div>
                              <Button 
                                variant="outline-danger" 
                                size="sm"
                                onClick={() => handleRemoveFromWishlist(item.id)}
                              >
                                Remove
                              </Button>
                            </div>
                          </Card.Body>
                        </Card>
                      </Col>
                    ))}
                  </Row>
                )}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Profile Edit Modal */}
      <Modal show={showProfileModal} onHide={() => setShowProfileModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" defaultValue={user.name} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" defaultValue={user.email} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Phone</Form.Label>
              <Form.Control type="tel" defaultValue={user.phone} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>CET Marks</Form.Label>
              <Form.Control type="number" defaultValue={user.cetMarks} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowProfileModal(false)}>
            Cancel
          </Button>
          <Button variant="primary">Save Changes</Button>
        </Modal.Footer>
      </Modal>

      {/* Add Application Modal */}
      <Modal show={showApplicationModal} onHide={() => setShowApplicationModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Application</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>College</Form.Label>
              <Form.Control 
                type="text" 
                value={newApplication.college}
                onChange={(e) => setNewApplication({...newApplication, college: e.target.value})}
                placeholder="Enter college name"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Branch</Form.Label>
              <Form.Select 
                value={newApplication.branch}
                onChange={(e) => setNewApplication({...newApplication, branch: e.target.value})}
              >
                <option value="">Select Branch</option>
                <option value="Computer Engineering">Computer Engineering</option>
                <option value="Information Technology">Information Technology</option>
                <option value="Mechanical Engineering">Mechanical Engineering</option>
                <option value="Electrical Engineering">Electrical Engineering</option>
                <option value="Civil Engineering">Civil Engineering</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Priority</Form.Label>
              <Form.Select 
                value={newApplication.priority}
                onChange={(e) => setNewApplication({...newApplication, priority: parseInt(e.target.value)})}
              >
                <option value={1}>1 - Highest</option>
                <option value={2}>2 - High</option>
                <option value={3}>3 - Medium</option>
                <option value={4}>4 - Low</option>
                <option value={5}>5 - Lowest</option>
              </Form.Select>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowApplicationModal(false)}>
            Cancel
          </Button>
          <Button variant="success" onClick={handleAddApplication}>
            Add Application
          </Button>
        </Modal.Footer>
      </Modal>
      
      <Footer />
    </div>
  );
};

export default StudentDashboard; 