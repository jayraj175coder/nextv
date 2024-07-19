// src/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css'; // Assuming you have a CSS file for styles
import { NavBar } from './NavBar';
import Footer from './Footer';
import Noticeboard from './Noticeboard';
import { Button} from 'react-bootstrap';


import AnimatedBackground from './AnimatedBackground';
// Update with the correct path to your logo

const Home = () => {
  return (
    <div className="home-container">
      <NavBar />
      <AnimatedBackground/>
      
       <div className="hero">
      <div className="hero-section">
        
        <h1 className="department-title">Take first Step</h1>
        <h2 className="department-subtitle">Towards your next future with us</h2>
        <p className="department-description">The platform provide you to get your dream and best college with less efforts and ease way.</p>
      </div>
      <div className='hero-section-2'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPbDf2wCykMbHwPXezehdJsw0Mzx5DzBriOQ&s"/>
       
      </div>
      </div>
      

      <div className="content-section container">
      <h1 className="display-4 text-center mb-4">Find Your Next College Here</h1>
      <div className="row text-center">
        <div className="col-md-3 mb-4">
          <div className="card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYuTGEX_EjLuRB_1xjL9X8Lt_iF5kEAnYNGg&s" alt="Top Colleges" className="card-img-top" />
            <div className="card-body">
              <Link to="/colleges" className="btn btn-primary custom-button">Top Colleges</Link>
              <p className="card-text">It is reviewed by seeing all the aspects, which colleges should have in their campus.</p>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-4">
          <div className="card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0wHCoZMTFTclrJyVwIQ3_BJLC_Yud3E3JsQ&s" alt="Cutoff" className="card-img-top" />
            <div className="card-body">
              <Link to="/cutoff" className="btn btn-primary custom-button">2019 Cut-Off</Link>
              <p className="card-text">Cut-Off of last year of all the colleges listed in the state of Maharashtra.</p>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-4">
          <div className="card">
            <img src="https://cdn.pixabay.com/photo/2015/11/06/13/25/blog-1027861_640.jpg"alt="Blog" className="card-img-top" />
            <div className="card-body">
              <a href="https://medium.com/@jayrajsanas175/dsy-engineering-complete-guide-a239e712aa58" target="_blank" rel="noopener noreferrer" className="btn btn-primary custom-button">Blog</a>
              <p className="card-text">Go through all the blogs for all the important information you should know.</p>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-4">
      <div className="card">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX2fDbq5UC-gXsZ8ggWMIc--dhDkc1lLIfPA&s" alt="Discuss" className="card-img-top" />
        <div className="card-body">
          <Link to="/Predictclg" className="btn btn-primary custom-button">PredictClg</Link>
          <p className="card-text">If you have difficulty then predict the top colleges that you want.</p>
        </div>
      </div>
    </div>
        

      </div>
    </div>

     <div>
     <Noticeboard/>
     <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 content-section2">
          <h1 className="title">Hello viewers...</h1>
          <ul className="info-list">
            <li>Login First To Community.</li>
            <li>Then you are able to ask Questions.</li>
            <li>And able to Answer Too.</li>
          </ul>
        </div>
        <div className="col-md-6 text-section">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYK-zRvdkgjV9uPO0LGn4SSfHkCf9Xarp-AA&s" alt="Welcome to the Community" className="img-fluid mb-3" />
          <p className="description">
            A Query Resolution Community is an online platform where users can post questions or queries on various topics and receive answers and solutions from other community members. It serves as a collaborative and knowledge-sharing space where individuals seek assistance or information from a broader audience...
          </p>
          <Link to="/Discuss" className="btn btn-primary custom-button">Discuss Here...</Link>
        </div>
      </div>
    </div>
    
    

     </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
};

export default Home;
