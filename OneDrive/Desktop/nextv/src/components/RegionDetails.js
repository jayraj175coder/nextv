import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import collegesdata from './collegesdata.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './NavBar';

const RegionDetails = () => {
  const { region } = useParams();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredColleges = collegesdata.filter(college =>
    college.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <NavBar />
      <div className="container">
        <h1 className="my-4 text-center">{region} </h1>
        <div className="alert alert-info">
          NOTE: While searching colleges please use full names.
        </div>
        <input
          type="text"
          className="form-control mb-4"
          placeholder="Search for specific colleges.."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Sr No</th>
              <th>Institute Code</th>
              <th>Institute Name</th>
              <th>CAP I</th>
              <th>CAP II</th>
              <th>CAP III</th>
            </tr>
          </thead>
          <tbody>
            {filteredColleges.map((college, index) => (
              <tr key={college.code}>
                <td>{index + 1}</td>
                <td>{college.code}</td>
                <td>{college.name}</td>
                <td>
                  <a href={college.cap1} className="btn btn-info" target="_blank" rel="noopener noreferrer">VIEW</a>
                </td>
                <td>
                  <a href={college.cap2} className="btn btn-info" target="_blank" rel="noopener noreferrer">VIEW</a>
                </td>
                <td>
                  <a href={college.cap3} className="btn btn-info" target="_blank" rel="noopener noreferrer">VIEW</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RegionDetails;
