import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h4>Connect here</h4>
            <ul className="list-inline">
              <li className="list-inline-item">
                <a className="social-link" href="https://github.com/Saniya-mulla03" target="_blank" rel="noopener noreferrer">
                  <FaGithub size="3em"/>
                  
                </a>
              </li>
              <li className="list-inline-item">
                <a className="social-link" href="https://www.linkedin.com/in/saniya-mulla-0b7226249/" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin size="3em"/>
                </a>
              </li>
              <li className="list-inline-item">
                <a className="social-link" href="https://www.instagram.com/___saniya_mulla___/" target="_blank" rel="noopener noreferrer">
                  <FaInstagram size="3em"/>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-6">
            <h4>Contact</h4>
            <p>Email: <a href="mailto:saniyamulla3036@gmail.com">saniyamulla3036@gmail.com</a></p>
            <p>Phone: 7249788941</p>
          </div>
        </div>
        <p className="text-center">&copy; {new Date().getFullYear()} Your Company Name. All Rights Reserved.</p>
        
      </div>
    </footer>
  );
}

export default Footer;
