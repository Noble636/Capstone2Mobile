import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../css/Home.css';

const apartmentImages = [
  { src: '/Homepage images/Apartment 1.jpg', label: 'Apartment 1' },
  { src: '/Homepage images/Apartment 2.jpg', label: 'Apartment 2' },
  { src: '/Homepage images/Apartment 3.jpg', label: 'Apartment 3' },
  { src: '/Homepage images/Apartment 4.jpg', label: 'Apartment 4' },
  { src: process.env.PUBLIC_URL + '/Homepage images/Apartment 5.jpg', label: 'Apartment 5' },
  { src: process.env.PUBLIC_URL + '/Homepage images/Apartment 6.jpg', label: 'Apartment 6' },
];

const Home = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [showDesktopPopup, setShowDesktopPopup] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIdx(idx => (idx + 1) % apartmentImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (window.innerWidth > 700) {
      setShowDesktopPopup(true);
    }
  }, []);

  const currentApartment = apartmentImages[currentIdx];

  return (
    <div className="home-container">
      <img src={process.env.PUBLIC_URL + '/Background/GB.png'} alt="Background" className="home-bg-image" />
      <div className="bubble b1"></div>
      <div className="bubble b2"></div>
      <div className="bubble b3"></div>
      <div className="bubble b4"></div>
      <div className="bubble b5"></div>
      <div className="bubble b6"></div>
      <div className="bubble b7"></div>
      <div className="bubble b8"></div>
      {showDesktopPopup && (
        <div style={{
          position: 'fixed',
          top: 0, left: 0, right: 0, bottom: 0,
          background: 'rgba(0,0,0,0.7)',
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <div style={{
            background: '#fff',
            borderRadius: 16,
            padding: '32px 24px',
            maxWidth: 320,
            textAlign: 'center',
            boxShadow: '0 4px 24px rgba(0,0,0,0.18)',
            position: 'relative'
          }}>
            <button
              onClick={() => setShowDesktopPopup(false)}
              style={{
                position: 'absolute',
                top: 10,
                right: 14,
                background: 'transparent',
                border: 'none',
                fontSize: 22,
                color: '#181818',
                cursor: 'pointer',
                fontWeight: 700,
                lineHeight: 1
              }}
              aria-label="Close"
            >
              ×
            </button>
            <h2 style={{ marginBottom: 16 }}>Mobile Only</h2>
            <p style={{ marginBottom: 16 }}>
              This version is for mobile browsing only.<br />
              Please use the web version for desktop.
            </p>
            <a
              href="https://apartmentmaintenance.vercel.app"
              style={{
                display: 'block',
                margin: '8px auto 0 auto',
                padding: '10px 20px',
                background: '#2d98da',
                color: '#fff',
                borderRadius: 8,
                textDecoration: 'none',
                fontWeight: 600
              }}
              target="_blank"
              rel="noopener noreferrer"
            >
              apartmentmaintenance.vercel.app
            </a>
          </div>
        </div>
      )}
      <div className="home-content-wrapper">
        <div className="home-left">
          <h1 className="home-main-title">Apartment Maintenance</h1>
          <p className="home-subtitle home-subtitle-separate">Web-based Tenant Complaint and Security Management System</p>
          <div className="home-nav">
            <div className="home-btn-row">
              <Link to="/about" className="home-animated-btn">About</Link>
              <Link to="/privacy-policy" className="home-animated-btn">Privacy Policy</Link>
              <Link to="/contact-us" className="home-animated-btn">Contact Us</Link>
            </div>
            <div className="home-btn-row">
              <Link to="/rental-info" className="home-animated-btn">Rental Information</Link>
              <Link to="/admin-login" className="home-animated-btn">Admin Login</Link>
              <Link to="/tenant-login" className="home-animated-btn">Tenant Login</Link>
            </div>
          </div>
        </div>
        <div className="home-right-frame">
          <img src={currentApartment.src} alt={currentApartment.label} className="home-apartment-img-full" />
        </div>
      </div>
    </div>
  );
};

export default Home;