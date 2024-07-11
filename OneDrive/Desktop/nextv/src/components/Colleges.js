// src/CollegeList.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './NavBar';

// Sample JSON data structure, replace this with your actual data
const collegesData = {
  ComputerEngineering: [
    {
      name: "COEP",
      fullName: "College of Engineering Pune",
      location: "Pune",
      rating: 5,
      highestPackage: "39LPA",
      averagePackage: "10L",
      autonomous: true,
      visitLink: "https://www.coep.org.in",
    },
    {
      name: "VJTI",
      fullName: "Veermata Jijabai Technological Institute",
      location: "Mumbai",
      rating: 5,
      highestPackage: "30LPA",
      averagePackage: "8L",
      autonomous: true,
      visitLink: "http://www.vjti.ac.in",
    },
    {
      name: "SPIT",
      fullName: "Sardar Patel Institute of Technology",
      location: "Mumbai",
      rating: 5,
      highestPackage: "40LPA",
      averagePackage: "9L",
      autonomous: true,
      visitLink: "https://www.spit.ac.in",
    },
    {
      name: "WCE",
      fullName: "Walchand College of Engineering, Sangli",
      location: "Sangli",
      rating: 5,
      highestPackage: "40LPA",
      averagePackage: "8L",
      autonomous: true,
      visitLink: "https://www.walchandsangli.ac.in",
    },
    {
      name: "PICT",
      fullName: "Pune Institute of Technology",
      location: "Pune",
      rating: 4,
      highestPackage: "38LPA",
      averagePackage: "8L",
      autonomous: false,
      visitLink: "https://www.pict.edu",
    },
    {
      name: "VIT Pune",
      fullName: "Vishvakarma Institute Of Technology",
      location: "Pune",
      rating: 4,
      highestPackage: "38LPA",
      averagePackage: "10L",
      autonomous: true,
      visitLink: "https://www.vit.edu",
    },
    // Add more colleges here...
  ],
  Electrical: [],
  Electronics: [],
  InformationTechnology: [
    {
    name: "VJTI",
    fullName: "Veermata Jijabai Technological Institute",
    location: "Mumbai",
    rating: 5,
    highestPackage: "30LPA",
    averagePackage: "8L",
    autonomous: true,
    visitLink: "http://www.vjti.ac.in",
  },
  {
    name: "SPIT",
    fullName: "Sardar Patel Institute of Technology",
    location: "Mumbai",
    rating: 5,
    highestPackage: "40LPA",
    averagePackage: "9L",
    autonomous: true,
    visitLink: "https://www.spit.ac.in",
  },
  ],
  Civil: [],
  Mechanical: [],
};

const Colleges = () => {
  const [selectedDept, setSelectedDept] = useState('ComputerEngineering');

  const handleDeptChange = (dept) => {
    setSelectedDept(dept);
  };

  const currentData = collegesData[selectedDept] || [];

  return (
    <div><NavBar/>
    <div className="container mt-5">
      <div className="btn-group mb-4">
        {Object.keys(collegesData).map((dept) => (
          <button
            key={dept}
            className={`btn btn-${selectedDept === dept ? 'primary' : 'outline-primary'} mx-1`}
            onClick={() => handleDeptChange(dept)}
          >
            {dept.replace(/([A-Z])/g, ' $1').trim()}
          </button>
        ))}
      </div>
      <div className="row">
        {currentData.length > 0 ? (
          currentData.map((college, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">{college.name}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">{college.fullName}</h6>
                  <p className="card-text"><strong>Location:</strong> {college.location}</p>
                  <p className="card-text"><strong>Rating:</strong> {'★'.repeat(college.rating)}</p>
                  <p className="card-text"><strong>Highest Package:</strong> {college.highestPackage}</p>
                  <p className="card-text"><strong>Average Package:</strong> {college.averagePackage}</p>
                  <p className="card-text"><strong>Autonomous:</strong> {college.autonomous ? 'Yes' : 'No'}</p>
                  <a href={college.visitLink} target="_blank" rel="noopener noreferrer" className="btn btn-info">Visit</a>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No data available for this department</p>
        )}
      </div>
    </div>
    </div>
  );
};

export default Colleges;
