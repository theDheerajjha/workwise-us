import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBriefcase, faMapMarkerAlt, faBuilding, faClock } from '@fortawesome/free-solid-svg-icons';
import './Banner.scss';

const useTypingEffect = (text: string, typingSpeed: number = 100, deletingSpeed: number = 50, pauseTime: number = 2000) => {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isDeleting && currentIndex < text.length) {
        setDisplayText(text.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      } else if (!isDeleting && currentIndex === text.length) {
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && currentIndex > 0) {
        setDisplayText(text.slice(0, currentIndex - 1));
        setCurrentIndex(currentIndex - 1);
      } else {
        setIsDeleting(false);
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentIndex, isDeleting, text, typingSpeed, deletingSpeed, pauseTime]);

  return displayText;
};

const Banner: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [location, setLocation] = useState('');
  const displayText = useTypingEffect('Find Your Dream Job');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement search functionality
    console.log('Searching for:', { searchQuery, location });
  };

  return (
    <section className="banner">
      <div className="banner-content">
        <div className="banner-text">
          <h1>
            <span className="typing-text">{displayText}</span>
            <span className="cursor">|</span>
          </h1>
          <p>Discover thousands of job opportunities with all the information you need</p>
        </div>
        
        <form className="search-container" onSubmit={handleSearch}>
          <div className="search-box">
            <div className="search-input">
              <FontAwesomeIcon icon={faBriefcase} />
              <input 
                type="text" 
                placeholder="Job title, keywords, or company"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <div className="search-input">
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              <input 
                type="text" 
                placeholder="City, state, or zip code"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            
            <button type="submit" className="search-button">
              <FontAwesomeIcon icon={faSearch} />
              Search Jobs
            </button>
          </div>
        </form>

        <div className="popular-searches">
          <span>Popular:</span>
          <a href="/jobs?q=software+engineer">Software Engineer</a>
          <a href="/jobs?q=product+manager">Product Manager</a>
          <a href="/jobs?q=data+scientist">Data Scientist</a>
          <a href="/jobs?q=ux+designer">UX Designer</a>
        </div>

        <div className="job-stats">
          <div className="stat-item">
            <FontAwesomeIcon icon={faBuilding} />
            <span>10,000+ Companies</span>
          </div>
          <div className="stat-item">
            <FontAwesomeIcon icon={faBriefcase} />
            <span>50,000+ Jobs</span>
          </div>
          <div className="stat-item">
            <FontAwesomeIcon icon={faClock} />
            <span>Updated Daily</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner; 