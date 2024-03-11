import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthData, hData } from "../../app-config";
import Pagination from "../Pagination";
import job_log from "../../Assets/job_icon.png";
import "./index.scss";

const List = () => {
  const [list, setList] = useState<any>([]);
  const navigate = useNavigate();

  useEffect(() => {
    setList(hData);
    // getJobList();
  }, []);

  const handleApply = (jobId: string) => {
    // Navigate to the job description page
    navigate(`/job/${jobId}`);
  };
  const getJobList = () => {
    fetch("https://data.usajobs.gov/api/search", {
      method: "GET",
      headers: {
        Host: AuthData.hostAddress,
        "User-Agent": AuthData.userAgent,
        "Authorization-Key": AuthData.authKey,
      },
    })
      .then((res) => res.json())
      .then((result) => {
        setList(result);
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div className="d-flex main-div flex-wrap justify-content-center">
        {list.map((item: any) => (
          <div className="job-card-main" key={item.MatchedObjectId}>
            <div className="job-card-upper">
              <div className="jobs-logo">
                <img src={job_log} alt="loading..." />
              </div>
              <div className="job-title-exp">
                <div className="job-designation">Developer</div>
                <div className="job-company-name">Amazon</div>

                <div className="job-details-short">
                  <div className="experience-required"> 2+ years</div>
                  <div className="expected-salary">
                    As per industry standard
                  </div>
                  <div className="job-location">Mumbai</div>
                </div>
              </div>
            </div>
            <br />
            <div className="job-card-lower">
              <div className="apply-before-text">Apply Before :</div>
              <div className="apply-button-div">
                {" "}
                <button
                  className="btn-primary apply-button"
                  onClick={() => handleApply(item.MatchedObjectId)}
                >
                  Apply
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Pagination totalPages={10} currentPage={3} />
    </>
  );
};

export default List;
