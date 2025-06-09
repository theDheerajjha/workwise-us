import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faMapMarkerAlt, faClock, faDollarSign, faBriefcase } from '@fortawesome/free-solid-svg-icons';
import './List.scss';

interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  salary: string;
  postedAt: string;
  logo: string;
}

const List: React.FC = () => {
  // This would typically come from an API
  const jobs: Job[] = [
    {
      id: '1',
      title: 'Senior Software Engineer',
      company: 'TechCorp',
      location: 'San Francisco, CA',
      type: 'Full-time',
      salary: '$120k - $180k',
      postedAt: '2 days ago',
      logo: '/logos/techcorp.png'
    },
    {
      id: '2',
      title: 'Product Manager',
      company: 'InnovateCo',
      location: 'Remote',
      type: 'Full-time',
      salary: '$100k - $150k',
      postedAt: '1 day ago',
      logo: '/logos/innovateco.png'
    },
    {
      id: '3',
      title: 'Frontend Developer',
      company: 'DesignHub',
      location: 'New York, NY',
      type: 'Full-time',
      salary: '$90k - $130k',
      postedAt: '3 days ago',
      logo: '/logos/designhub.png'
    },
    {
      id: '4',
      title: 'DevOps Engineer',
      company: 'CloudScale',
      location: 'Remote',
      type: 'Full-time',
      salary: '$110k - $160k',
      postedAt: '1 day ago',
      logo: '/logos/cloudscale.png'
    },
    {
      id: '5',
      title: 'UX/UI Designer',
      company: 'CreativeMinds',
      location: 'Los Angeles, CA',
      type: 'Full-time',
      salary: '$85k - $120k',
      postedAt: '4 days ago',
      logo: '/logos/creativeminds.png'
    },
    {
      id: '6',
      title: 'Data Scientist',
      company: 'DataFlow',
      location: 'Boston, MA',
      type: 'Full-time',
      salary: '$130k - $180k',
      postedAt: '2 days ago',
      logo: '/logos/dataflow.png'
    },
    {
      id: '7',
      title: 'Mobile Developer',
      company: 'AppWorks',
      location: 'Remote',
      type: 'Contract',
      salary: '$70/hr - $90/hr',
      postedAt: '1 day ago',
      logo: '/logos/appworks.png'
    },
    {
      id: '8',
      title: 'Backend Developer',
      company: 'ServerStack',
      location: 'Seattle, WA',
      type: 'Full-time',
      salary: '$100k - $150k',
      postedAt: '3 days ago',
      logo: '/logos/serverstack.png'
    },
    {
      id: '9',
      title: 'QA Engineer',
      company: 'QualityFirst',
      location: 'Austin, TX',
      type: 'Full-time',
      salary: '$80k - $110k',
      postedAt: '5 days ago',
      logo: '/logos/qualityfirst.png'
    },
    {
      id: '10',
      title: 'Technical Writer',
      company: 'DocuTech',
      location: 'Remote',
      type: 'Part-time',
      salary: '$40/hr - $60/hr',
      postedAt: '2 days ago',
      logo: '/logos/docutech.png'
    },
    {
      id: '11',
      title: 'AI/ML Engineer',
      company: 'NeuralNet',
      location: 'Palo Alto, CA',
      type: 'Full-time',
      salary: '$140k - $200k',
      postedAt: '1 day ago',
      logo: '/logos/neuralnet.png'
    },
    {
      id: '12',
      title: 'Security Engineer',
      company: 'SecureTech',
      location: 'Remote',
      type: 'Full-time',
      salary: '$120k - $170k',
      postedAt: '3 days ago',
      logo: '/logos/securetech.png'
    }
  ];

  const [failedLogos, setFailedLogos] = useState<Set<string>>(new Set());

  const handleLogoError = (company: string) => {
    console.log(`Logo failed to load for ${company}`);
    setFailedLogos(prev => {
      const newSet = new Set(prev);
      newSet.add(company);
      return newSet;
    });
  };

  return (
    <div className="job-list">
      <div className="job-list-header">
        <h2>Latest Job Openings</h2>
        <div className="job-filters">
          <select className="filter-select">
            <option value="">All Job Types</option>
            <option value="full-time">Full-time</option>
            <option value="part-time">Part-time</option>
            <option value="contract">Contract</option>
            <option value="remote">Remote</option>
          </select>
          <select className="filter-select">
            <option value="">All Locations</option>
            <option value="remote">Remote</option>
            <option value="us">United States</option>
            <option value="eu">Europe</option>
          </select>
        </div>
      </div>

      <div className="jobs-grid">
        {jobs.map(job => (
          <Link to={`/job/${job.id}`} key={job.id} className="job-card">
            <div className="job-card-header">
              {!failedLogos.has(job.company) ? (
                <img 
                  src={job.logo} 
                  alt={`${job.company} logo`} 
                  className="company-logo"
                  onError={() => handleLogoError(job.company)}
                  loading="lazy"
                />
              ) : (
                <div className="company-logo-fallback">
                  <FontAwesomeIcon icon={faBriefcase} />
                </div>
              )}
              <div className="job-info">
                <h3>{job.title}</h3>
                <div className="company-name">
                  <span>{job.company}</span>
                </div>
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
            </div>

            <div className="job-footer">
              <span className="posted-at">Posted {job.postedAt}</span>
              <button className="apply-button">Apply Now</button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default List; 