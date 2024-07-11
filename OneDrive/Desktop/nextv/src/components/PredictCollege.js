import React, { useState } from 'react';
import { Container, Form, Button, Row, Col, Card, Navbar } from 'react-bootstrap';
import { NavBar } from './NavBar';

const PredictCollege = () => {
  const [caste, setCaste] = useState('');
  const [marks, setMarks] = useState('');
  const [region, setRegion] = useState('');
  const [predictedColleges, setPredictedColleges] = useState([]);

  const handlePredict = () => {
    // Logic for predicting colleges based on input values
    // This is just a placeholder for demonstration purposes
    const colleges = [
      { name: 'VJTI', location: 'Mumbai', cutoff: 97 },
      { name: 'COEP', location: 'Pune', cutoff: 97 },
      { name: 'SPIT', location: 'Mumbai', cutoff: 94 },
      { name: 'Thandomal Shanhani Engineering College', location: 'Mumbai', cutoff: 92 },
      { name: 'DJ Sanghavi', location: 'Mumbai', cutoff: 90 },
      { name: 'Walchand Sanghali', location: 'Pune', cutoff: 94 },
      { name: 'Vishweshwayra Institute of Technology', location: 'Pune', cutoff: 92 },
      { name: 'Somaiya', location: 'Mumbai', cutoff: 91},
      { name: 'Government College of Engineering, Aurangabad', location: 'Aurangabad', cutoff: 90 },
      { name: 'Vidyalankar Institute of Technology', location: 'Mumbai', cutoff: 90},
      { name: 'Cummies college', location: 'Pune', cutoff: 90 },
      { name: 'DY PAtil Mumbai', location: 'Mumbai', cutoff: 81},
      
      

    ];

    const filteredColleges = colleges.filter(
      (college) =>
        college.cutoff <= marks &&
        (region === '' || college.location.includes(region))
    );

    setPredictedColleges(filteredColleges);
  };

  return (
    <div><NavBar/>
    <Container className="mt-5">
      <Card>
        <Card.Body>
          <Card.Title>College Predictor</Card.Title>
          <Form>
            Currently Open category ONly
            <Form.Group as={Row} className="mb-3" controlId="formCaste">
              <Form.Label column sm={2}>
                Branch
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  type="text"
                  placeholder="Enter your Branch you want.."
                  value={caste}
                  onChange={(e) => setCaste(e.target.value)}
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formMarks">
              <Form.Label column sm={2}>
                Marks
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  type="number"
                  placeholder="Enter your marks"
                  value={marks}
                  onChange={(e) => setMarks(e.target.value)}
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formRegion">
              <Form.Label column sm={2}>
                Region
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  type="text"
                  placeholder="Enter your region"
                  value={region}
                  onChange={(e) => setRegion(e.target.value)}
                />
              </Col>
            </Form.Group>

            <Button variant="primary" onClick={handlePredict}>
              Predict Colleges
            </Button>
          </Form>
        </Card.Body>
      </Card>

      {predictedColleges.length > 0 && (
        <Card className="mt-3">
          <Card.Body>
            <Card.Title>Predicted Colleges</Card.Title>
            <ul>
              {predictedColleges.map((college, index) => (
                <li key={index}>
                  {college.name} - {college.location} (Cutoff: {college.cutoff})
                </li>
              ))}
            </ul>
          </Card.Body>
        </Card>
      )}
    </Container>
    </div>
  );
};

export default PredictCollege;
