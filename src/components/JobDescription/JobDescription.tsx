import React from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faMapMarkerAlt, faClock, faDollarSign, faLink, faShare, faBriefcase } from '@fortawesome/free-solid-svg-icons';
import './JobDescription.scss';

const JobDescription: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  // This would typically come from an API
  const job = {
    id,
    title: 'Senior Software Engineer',
    company: 'TechCorp',
    location: 'San Francisco, CA',
    type: 'Full-time',
    salary: '$120k - $180k',
    postedAt: '2 days ago',
    logo: 'https://via.placeholder.com/100',
    description: `
      We are looking for a Senior Software Engineer to join our growing team. You will be responsible for designing and implementing scalable solutions, mentoring junior developers, and contributing to our technical architecture.

      Responsibilities:
      • Design and implement scalable software solutions
      • Write clean, maintainable, and efficient code
      • Mentor junior developers and conduct code reviews
      • Collaborate with cross-functional teams
      • Participate in technical architecture discussions

      Requirements:
      • 5+ years of experience in software development
      • Strong knowledge of JavaScript/TypeScript
      • Experience with React and Node.js
      • Understanding of cloud services (AWS, GCP, or Azure)
      • Excellent problem-solving skills
    `,
    benefits: [
      'Competitive salary and equity',
      'Health, dental, and vision insurance',
      '401(k) matching',
      'Flexible work hours',
      'Remote work options',
      'Professional development budget'
    ]
  };

  return (
    <div className="job-description">
      <div className="job-header">
        <div className="company-info">
          <FontAwesomeIcon icon={faBriefcase} />
          <div className="job-title-section">
            <h1>{job.title}</h1>
            <div className="company-name">
              <FontAwesomeIcon icon={faBuilding} />
              <span>{job.company}</span>
            </div>
          </div>
        </div>

        <div className="job-actions">
          <button className="btn btn-primary">Apply Now</button>
          <button className="btn btn-secondary">
            <FontAwesomeIcon icon={faShare} />
            Share
          </button>
        </div>
      </div>

      <div className="job-details">
        <div className="detail">
          <FontAwesomeIcon icon={faMapMarkerAlt} />
          <span>{job.location}</span>
        </div>
        <div className="detail">
          <FontAwesomeIcon icon={faClock} />
          <span>{job.type}</span>
        </div>
        <div className="detail">
          <FontAwesomeIcon icon={faDollarSign} />
          <span>{job.salary}</span>
        </div>
        <div className="detail">
          <FontAwesomeIcon icon={faLink} />
          <a href="#" className="company-website">Company Website</a>
        </div>
      </div>

      <div className="job-content">
        <section className="description-section">
          <h2>Job Description</h2>
          <div className="description-text">
            {job.description.split('\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </section>

        <section className="benefits-section">
          <h2>Benefits & Perks</h2>
          <ul className="benefits-list">
            {job.benefits.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>
        </section>
      </div>

      <div className="job-footer">
        <div className="posted-info">
          <span>Posted {job.postedAt}</span>
        </div>
        <button className="btn btn-primary">Apply for this position</button>
      </div>
    </div>
  );
};

export default JobDescription; 