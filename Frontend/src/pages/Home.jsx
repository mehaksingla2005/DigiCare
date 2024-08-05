import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home">
      <header className="home-header">
        <h1>Welcome to Unified Health Care</h1>
        <p>Your centralized health information portal</p>
      </header>

      <section className="features">
        <h2>Key Features</h2>
        <div className="feature-grid">
          <div className="feature-item">
            <h3>Centralized Health Records</h3>
            <p>Access all your medical reports and history in one place</p>
          </div>
          <div className="feature-item">
            <h3>Secure and Private</h3>
            <p>Your health data is protected with state-of-the-art security</p>
          </div>
          <div className="feature-item">
            <h3>Easy Doctor Communication</h3>
            <p>Seamless information sharing between you and your healthcare providers</p>
          </div>
          <div className="feature-item">
            <h3>Medication Tracking</h3>
            <p>Keep track of your current and past medications</p>
          </div>
        </div>
      </section>

      <section className="cta">
        <h2>Get Started Today</h2>
        <div className="cta-buttons">
          <Link to="/signup" className="btn btn-primary">Sign Up</Link>
          <Link to="/login" className="btn btn-secondary">Log In</Link>
        </div>
      </section>

      <section className="for-doctors">
        <h2>For Healthcare Providers</h2>
        <p>Unified Health Care offers a comprehensive solution for managing patient information and improving care coordination.</p>
        <Link to="/doctor-signup" className="btn btn-tertiary">Join as a Healthcare Provider</Link>
      </section>

      <section className="testimonials">
        <h2>What Our Users Say</h2>
        <div className="testimonial-grid">
          <div className="testimonial-item">
            <p>"Unified Health Care has revolutionized how I manage my health information. It's so convenient!"</p>
            - Sarah J., Patient
          </div>
          <div className="testimonial-item">
            <p>"As a doctor, this platform has greatly improved my ability to provide informed care to my patients."</p>
            - Dr. Michael R., Cardiologist
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;