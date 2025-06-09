import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBriefcase, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import './Banner.scss';

const Banner: React.FC = () => {
  return (
    <section className="banner">
      <div className="banner-content">
        <h1>Find Your Dream Job</h1>
        <p>Discover thousands of job opportunities with all the information you need</p>
        
        <div className="search-container">
          <div className="search-box">
            <div className="search-input">
              <FontAwesomeIcon icon={faBriefcase} />
              <input type="text" placeholder="Job title, keywords, or company" />
            </div>
            
            <div className="search-input">
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              <input type="text" placeholder="City, state, or zip code" />
            </div>
            
            <button className="search-button">
              <FontAwesomeIcon icon={faSearch} />
              Search Jobs
            </button>
          </div>
        </div>

        <div className="popular-searches">
          <span>Popular:</span>
          <a href="/jobs?q=software+engineer">Software Engineer</a>
          <a href="/jobs?q=product+manager">Product Manager</a>
          <a href="/jobs?q=data+scientist">Data Scientist</a>
          <a href="/jobs?q=ux+designer">UX Designer</a>
        </div>
      </div>
    </section>
  );
};

export default Banner; 