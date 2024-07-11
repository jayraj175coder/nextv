import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import './CollegeSearch.css';
import { NavBar } from './NavBar';
import CollegeSearchData from './CollegeSearchData.js';
import AnimatedBackground from './AnimatedBackground.js';

const CollegeSearch = () => {
   
  const [colleges, setColleges] = useState([]);
  const [filteredColleges, setFilteredColleges] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    region: '',
    
  });

  useEffect(() => {
    setColleges(CollegeSearchData);
    setFilteredColleges(CollegeSearchData);
  }, []);

  const handleSearch = () => {
    let filtered = CollegeSearchData.filter(college => 
      college.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (filters.region ? college.region === filters.region : true) &&
      (filters.district ? college.district === filters.district : true) &&
      (filters.course ? college.course === filters.course : true) &&
      (filters.fees ? college.fees <= filters.fees : true) &&
      (filters.caste ? college.caste === filters.caste : true) &&
      (filters.marks ? college.marks >= filters.marks : true)
    );
    setFilteredColleges(filtered);
  };

  const handleFilterChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div>
        <NavBar/>
        <AnimatedBackground/>
    <Container className="mt-5">
      <Row>
        <Col md={10}>
          <Form.Group>
            <Form.Control 
              type="text" 
              placeholder="Search Colleges" 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </Form.Group>
        </Col>
        <Col>
          <Button onClick={handleSearch}>Search</Button>
        </Col>
      </Row>
      <Row className="mt-3">
        
            
           
         
        <Col md={13}>
          <h5>Results: {filteredColleges.length} colleges found</h5>
          <Row className>
            {filteredColleges.map(college => (
              <Col md={4} key={college.id} className="mb-4 ">
                <Card>
                  <Card.Img 
                    variant="top" 
                    src={college.image} 
                  />
                  <Card.Body>
                    <Card.Title>{college.name}</Card.Title>
                    <Card.Text>
                      <p><strong>Region:</strong> {college.region}</p>
                      
                    </Card.Text>
                    <Button className="learn-more-btn">Learn More</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
    </div>
  );
};

export default CollegeSearch;
