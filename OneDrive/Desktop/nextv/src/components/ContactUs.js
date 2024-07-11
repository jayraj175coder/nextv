import React, { useState } from 'react';
import axios from 'axios';
import { NavBar } from './NavBar';
import AnimatedBackground from './AnimatedBackground';

function ContactUs() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = {
        name,
        email,
        message,
      };
      // Send data to server using axios
      await axios.post('/api/contact', data);
    } catch (error) {
      // Handle error
    }
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div>
      <NavBar/>
    
    <div className="pt-5 d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-xl-6">
            <div className="card shadow-lg">
              <div className="row no-gutters">
                <div className="col-md-6 d-none d-md-block">
                  <img className="card-img h-100" src="/assests/bgfyt.jpg" alt="Contact Us" />
                </div>
                <div className="col-md-6 d-flex align-items-center">
                  <div className="card-body">
                    
                    <h1 className="card-title text-center font-weight-bold mb-4">Contact</h1>
                    <form onSubmit={handleSubmit}>
                      <div className="form-group mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Name"
                          onChange={(e) => setName(e.target.value)}
                          value={name}
                          required
                        />
                      </div>
                      <div className="form-group mb-3">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Email"
                          onChange={(e) => setEmail(e.target.value)}
                          value={email}
                          required
                        />
                      </div>
                      <div className="form-group mb-4">
                        <textarea
                          className="form-control"
                          rows={5}
                          placeholder="Message.."
                          onChange={(e) => setMessage(e.target.value)}
                          value={message}
                          required
                        ></textarea>
                      </div>
                      <button className="btn btn-primary btn-block" type="submit">
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default ContactUs;
