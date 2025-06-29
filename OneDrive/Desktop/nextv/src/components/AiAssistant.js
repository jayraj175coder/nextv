import React, { useState, useEffect } from 'react';
import { NavBar } from './NavBar';
import Footer from './Footer';
import { Container, Row, Col, Card, Form, Button, Alert, Spinner, Badge } from 'react-bootstrap';
import './AiAssistant.css';

const AiAssistant = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [userProfile, setUserProfile] = useState({
    marks: '',
    region: '',
    branch: '',
    caste: '',
    budget: ''
  });

  // Predefined questions for quick access
  const quickQuestions = [
    "Which colleges can I get with my marks?",
    "What's the cutoff for Computer Engineering?",
    "Best colleges in Mumbai for IT?",
    "How to prepare for college admissions?",
    "What documents do I need for admission?"
  ];

  // Sample college database
  const collegeDatabase = {
    "Computer Engineering": [
      { name: "COEP", location: "Pune", cutoff: 97, rating: 4.8, package: "10-15 LPA" },
      { name: "VJTI", location: "Mumbai", cutoff: 96, rating: 4.7, package: "8-12 LPA" },
      { name: "SPIT", location: "Mumbai", cutoff: 94, rating: 4.6, package: "7-11 LPA" },
      { name: "PICT", location: "Pune", cutoff: 92, rating: 4.5, package: "6-10 LPA" },
      { name: "VIT", location: "Pune", cutoff: 90, rating: 4.4, package: "5-9 LPA" }
    ],
    "Information Technology": [
      { name: "VJTI", location: "Mumbai", cutoff: 95, rating: 4.7, package: "8-12 LPA" },
      { name: "SPIT", location: "Mumbai", cutoff: 93, rating: 4.6, package: "7-11 LPA" },
      { name: "PICT", location: "Pune", cutoff: 91, rating: 4.5, package: "6-10 LPA" },
      { name: "VIT", location: "Pune", cutoff: 89, rating: 4.4, package: "5-9 LPA" }
    ],
    "Mechanical Engineering": [
      { name: "COEP", location: "Pune", cutoff: 85, rating: 4.6, package: "6-10 LPA" },
      { name: "VJTI", location: "Mumbai", cutoff: 84, rating: 4.5, package: "5-9 LPA" },
      { name: "WCE", location: "Sangli", cutoff: 82, rating: 4.4, package: "4-8 LPA" }
    ]
  };

  useEffect(() => {
    // Welcome message
    setMessages([
      {
        id: 1,
        type: 'ai',
        content: "Hello! I'm your AI College Assistant. I can help you with college recommendations, cutoff analysis, and admission guidance. What would you like to know?",
        timestamp: new Date()
      }
    ]);
  }, []);

  const generateAIResponse = async (userMessage) => {
    setIsLoading(true);
    
    // Simulate AI processing
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    let response = "";
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes("college") && lowerMessage.includes("marks")) {
      const userMarks = parseInt(userProfile.marks) || 85;
      const branch = userProfile.branch || "Computer Engineering";
      const colleges = collegeDatabase[branch] || collegeDatabase["Computer Engineering"];
      const recommendedColleges = colleges.filter(college => college.cutoff <= userMarks);
      
      response = `Based on your marks (${userMarks}), here are colleges you can consider for ${branch}:\n\n`;
      recommendedColleges.forEach(college => {
        response += `🏫 ${college.name} (${college.location})\n`;
        response += `   Cutoff: ${college.cutoff} | Rating: ${college.rating}/5 | Avg Package: ${college.package}\n\n`;
      });
      
      if (recommendedColleges.length === 0) {
        response = `With ${userMarks} marks, you might need to consider:\n1. Lower-ranked colleges\n2. Different branches\n3. Private colleges\n4. Diploma courses\n\nWould you like me to suggest alternatives?`;
      }
    } else if (lowerMessage.includes("cutoff")) {
      response = "Here are the latest cutoff trends:\n\n";
      Object.keys(collegeDatabase).forEach(branch => {
        const colleges = collegeDatabase[branch];
        response += `📚 ${branch}:\n`;
        colleges.slice(0, 3).forEach(college => {
          response += `   ${college.name}: ${college.cutoff} marks\n`;
        });
        response += "\n";
      });
    } else if (lowerMessage.includes("prepare") || lowerMessage.includes("admission")) {
      response = `Here's your admission preparation checklist:\n\n`;
      response += `📋 Documents Required:\n`;
      response += `• 10th and 12th mark sheets\n`;
      response += `• CET scorecard\n`;
      response += `• Caste certificate (if applicable)\n`;
      response += `• Income certificate\n`;
      response += `• Domicile certificate\n\n`;
      response += `🎯 Preparation Tips:\n`;
      response += `• Focus on PCM subjects\n`;
      response += `• Practice previous year papers\n`;
      response += `• Join coaching if needed\n`;
      response += `• Stay updated with admission dates\n`;
    } else if (lowerMessage.includes("best") && lowerMessage.includes("college")) {
      response = "🏆 Top Colleges in Maharashtra:\n\n";
      response += "1. COEP (Pune) - Government, Excellent placement\n";
      response += "2. VJTI (Mumbai) - Government, Great infrastructure\n";
      response += "3. SPIT (Mumbai) - Private, Good placements\n";
      response += "4. PICT (Pune) - Private, Strong academics\n";
      response += "5. VIT (Pune) - Private, Good industry connect\n\n";
      response += "Would you like detailed information about any specific college?";
    } else {
      response = "I understand you're asking about " + userMessage + ". Let me help you better by knowing your profile. Could you please share:\n\n";
      response += "• Your CET marks\n";
      response += "• Preferred branch\n";
      response += "• Preferred region\n";
      response += "• Budget constraints\n\n";
      response += "This will help me give you personalized recommendations!";
    }
    
    setIsLoading(false);
    return response;
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;
    
    const userMessage = {
      id: Date.now(),
      type: 'user',
      content: inputMessage,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    
    const aiResponse = await generateAIResponse(inputMessage);
    
    const aiMessage = {
      id: Date.now() + 1,
      type: 'ai',
      content: aiResponse,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, aiMessage]);
  };

  const handleQuickQuestion = (question) => {
    setInputMessage(question);
  };

  const handleProfileUpdate = (field, value) => {
    setUserProfile(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="ai-assistant-page">
      <NavBar />
      
      <Container className="ai-container">
        <Row>
          {/* User Profile Section */}
          <Col lg={4} md={12} className="mb-4">
            <Card className="profile-card">
              <Card.Header>
                <h5>👤 Your Profile</h5>
              </Card.Header>
              <Card.Body>
                <Form>
                  <Form.Group className="mb-3">
                    <Form.Label>CET Marks</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Enter your CET marks"
                      value={userProfile.marks}
                      onChange={(e) => handleProfileUpdate('marks', e.target.value)}
                    />
                  </Form.Group>
                  
                  <Form.Group className="mb-3">
                    <Form.Label>Preferred Branch</Form.Label>
                    <Form.Select
                      value={userProfile.branch}
                      onChange={(e) => handleProfileUpdate('branch', e.target.value)}
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
                    <Form.Label>Preferred Region</Form.Label>
                    <Form.Select
                      value={userProfile.region}
                      onChange={(e) => handleProfileUpdate('region', e.target.value)}
                    >
                      <option value="">Select Region</option>
                      <option value="Mumbai">Mumbai</option>
                      <option value="Pune">Pune</option>
                      <option value="Nagpur">Nagpur</option>
                      <option value="Aurangabad">Aurangabad</option>
                      <option value="Nashik">Nashik</option>
                    </Form.Select>
                  </Form.Group>
                  
                  <Form.Group className="mb-3">
                    <Form.Label>Category</Form.Label>
                    <Form.Select
                      value={userProfile.caste}
                      onChange={(e) => handleProfileUpdate('caste', e.target.value)}
                    >
                      <option value="">Select Category</option>
                      <option value="Open">Open</option>
                      <option value="OBC">OBC</option>
                      <option value="SC">SC</option>
                      <option value="ST">ST</option>
                      <option value="EWS">EWS</option>
                    </Form.Select>
                  </Form.Group>
                  
                  <Form.Group className="mb-3">
                    <Form.Label>Budget (Annual Fees)</Form.Label>
                    <Form.Select
                      value={userProfile.budget}
                      onChange={(e) => handleProfileUpdate('budget', e.target.value)}
                    >
                      <option value="">Select Budget</option>
                      <option value="<50000">Less than ₹50,000</option>
                      <option value="50000-100000">₹50,000 - ₹1,00,000</option>
                      <option value="100000-200000">₹1,00,000 - ₹2,00,000</option>
                      <option value=">200000">More than ₹2,00,000</option>
                    </Form.Select>
                  </Form.Group>
                </Form>
              </Card.Body>
            </Card>
            
            {/* Quick Questions */}
            <Card className="quick-questions-card">
              <Card.Header>
                <h6>💡 Quick Questions</h6>
              </Card.Header>
              <Card.Body>
                {quickQuestions.map((question, index) => (
                  <Button
                    key={index}
                    variant="outline-primary"
                    size="sm"
                    className="quick-question-btn"
                    onClick={() => handleQuickQuestion(question)}
                  >
                    {question}
                  </Button>
                ))}
              </Card.Body>
            </Card>
          </Col>
          
          {/* Chat Section */}
          <Col lg={8} md={12}>
            <Card className="chat-card">
              <Card.Header>
                <h5>🤖 AI College Assistant</h5>
                <Badge bg="success">Online</Badge>
              </Card.Header>
              <Card.Body className="chat-body">
                <div className="messages-container">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`message ${message.type === 'user' ? 'user-message' : 'ai-message'}`}
                    >
                      <div className="message-content">
                        {message.content.split('\n').map((line, index) => (
                          <p key={index}>{line}</p>
                        ))}
                      </div>
                      <small className="message-time">
                        {message.timestamp.toLocaleTimeString()}
                      </small>
                    </div>
                  ))}
                  
                  {isLoading && (
                    <div className="message ai-message">
                      <div className="message-content">
                        <Spinner animation="border" size="sm" className="me-2" />
                        AI is thinking...
                      </div>
                    </div>
                  )}
                </div>
              </Card.Body>
              <Card.Footer>
                <Form onSubmit={(e) => { e.preventDefault(); handleSendMessage(); }}>
                  <Row>
                    <Col>
                      <Form.Control
                        type="text"
                        placeholder="Ask me anything about colleges..."
                        value={inputMessage}
                        onChange={(e) => setInputMessage(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                      />
                    </Col>
                    <Col xs="auto">
                      <Button type="submit" disabled={!inputMessage.trim() || isLoading}>
                        Send
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
      
      <Footer />
    </div>
  );
};

export default AiAssistant;
