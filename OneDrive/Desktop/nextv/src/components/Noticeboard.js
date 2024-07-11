import React, { useState } from 'react';
import { Container, Card } from 'react-bootstrap';
import './Noticeboard.css'; // Import custom styles

const Noticeboard = () => {
  const [isPaused, setIsPaused] = useState(false);

  const notices = [
    
    {
      title: 'ADMISSION NOTICE No:-02 FOR DIRECT SECOND YEAR (LATERAL ENTRY)- ENGINEERING /TECHNOLOGY [3 YEARS DURATION] FOR ACADEMIC YEAR 2023-24',
      date: '',
      content: '',
    },
    {
      title: 'Online Submission & Confirmation of Option Form of CAP Round-III through candidate\'s Login by the Candidate has been extended till 14-09-2023',
      date: '12-09-2023',
      content: '',
    },
    {
      title: 'Online Submission & Confirmation of Option Form of CAP Round-I through candidate\'s Login by the Candidate is started',
      date: '21-08-2023',
      content: '',
    },
    {
      title: 'Registration for the CAP has been extended till 10-08-2023 and verification of applications has been extended until 11-08-2023',
      date: '04-08-2023',
      content: '',
    },
  ];

  return (
    <Container className="noticeboard-container">
      <Card className="noticeboard-card">
        <Card.Body>
          <Card.Title>Notifications</Card.Title>
          <Card.Text>Important announcement</Card.Text>
        </Card.Body>
      </Card>
      <div
        className={`marquee ${isPaused ? 'paused' : ''}`}
        onClick={() => setIsPaused(!isPaused)}
      >
        {notices.map((notice, index) => (
          <Card className="notice-card" key={index}>
            <Card.Body>
              <Card.Title>{notice.title}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{notice.date}</Card.Subtitle>
              <Card.Text>{notice.content}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    </Container>
  );
};

export default Noticeboard;
