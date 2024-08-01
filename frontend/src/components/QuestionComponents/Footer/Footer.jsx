// Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className='container'>
    <div className="footer-container">
      <div className="footer-left">
        <div className="footer-buttons">
          <span className="footer-link">Previous</span>
          <div className="footer-checkbox">
            <input type="checkbox" id="markForRevision" />
            <label htmlFor="markForRevision">Mark for Revision</label>
          </div>
        </div>
      </div>
      <div className="footer-right">
      <div className="footer-buttons">
        <div><button className="footer-button check-answer">Check Answer</button></div>
        <div><button className="footer-button next-question">Next Question</button></div>
        </div>
      </div>
      
    </div>
    <div><button className="footer-button go-back">Go Back</button></div>
    </div>
  );
};

export default Footer;
