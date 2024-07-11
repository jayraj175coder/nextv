import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './NavBar';

const Cutoff = () => {
  const regions = [ 'Cutoff 2023', 'Cutoff 2022', 'Cutoff 2021', 'Cutoff 2024'];

  return (
    <div>
      <NavBar/>
    <div className="container">
      <h1 className="my-4 text-center">College Cutoffs</h1>
      <div className="row ">
        {regions.map(region => (
          <div key={region} className="col-md-6 mb-4">
            <Link to={`/colleges/${region}`} className="text-decoration-none text-dark">
              <div className="card">
                <img src="/assests/Cutoff.png" className="card-img-top"  />
                <div className="card-body text-center">
                  <h5 className="card-title">{region}</h5>
                  <p className="card-text"></p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Cutoff;
