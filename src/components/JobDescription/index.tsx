import React from "react";
import "./index.scss";
import { useParams, Link } from "react-router-dom";

const JobDescription = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <div className="jd-div">
      <div className="back-button">
        <Link to="/" className="btn-primary">
          Back
        </Link>
      </div>
      <h1>Job Description</h1>
      <p>This is the job description for job ID {id}</p>
    </div>
  );
};

export default JobDescription;
