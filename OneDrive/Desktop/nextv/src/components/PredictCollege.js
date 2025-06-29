import React from 'react';
import { NavBar } from './NavBar';
import Footer from './Footer';

const PredictCollege = () => (
  <>
    <NavBar />
    <div style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)' }}>
      <h1 style={{ fontSize: '2.5rem', color: '#e50914', marginBottom: '1rem' }}>College Predictor</h1>
      <p style={{ fontSize: '1.2rem', color: '#333', marginBottom: '2rem' }}>This page is under construction.</p>
      <div style={{ fontSize: '3rem' }}>🚧</div>
      <p style={{ color: '#888', marginTop: '1rem' }}>Check back soon for updates!</p>
    </div>
    <Footer />
  </>
);

export default PredictCollege;
