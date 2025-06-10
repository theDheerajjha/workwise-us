import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import './Footer.scss';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-section">
            <h3>WorkWise</h3>
            <p>Connecting talented professionals with amazing opportunities.</p>
            <div className="social-links">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4>For Job Seekers</h4>
            <ul>
              <li><Link to="/jobs">Browse Jobs</Link></li>
              <li><Link to="/companies">Company Reviews</Link></li>
              <li><Link to="/salary">Salary Calculator</Link></li>
              <li><Link to="/career-advice">Career Advice</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>For Employers</h4>
            <ul>
              <li><Link to="/post-job">Post a Job</Link></li>
              <li><Link to="/pricing">Pricing</Link></li>
              <li><Link to="/resources">Resources</Link></li>
              <li><Link to="/employer-blog">Employer Blog</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Company</h4>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/privacy">Privacy Policy</Link></li>
              <li><Link to="/terms">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} WorkWise. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 