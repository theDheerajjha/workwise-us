import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { hData } from "../../temp-data";
import Pagination from "../Pagination";
import job_log from "../../Assets/job_icon.png";
import "./index.scss";

const List = () => {
  const [list, setList] = useState<any[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    setList(hData);
  }, []);

  const handleApply = (jobId: string) => {
    // Navigate to the job description page
    navigate(`/job/${jobId}`);
  };

  return (
    <>
      <div className="d-flex main-div flex-wrap justify-content-center">
        {list.map((item: any) => (
          <div className="job-card">
            <div className="content-card" key={item.MatchedObjectId}>
              <div className="job-card-upper">
                <div className="jobs-logo">
                  <img src={job_log} alt="loading..." />
                </div>
                <div className="job-title-exp">
                  <div className="job-designation">
                    {item.MatchedObjectDescriptor.PositionTitle}
                  </div>
                  <div className="job-company-name">
                    {item.MatchedObjectDescriptor.OrganizationName}
                  </div>

                  <div className="job-details-short">
                    {/* <div className="experience-required"> {item.MatchedObjectDescriptor.UserArea.Details.RequiredExperience}</div> */}
                    <div className="expected-salary">
                      {`Salary Range: $${item.MatchedObjectDescriptor.PositionRemuneration[0].MinimumRange} - $${item.MatchedObjectDescriptor.PositionRemuneration[0].MaximumRange} ${item.MatchedObjectDescriptor.PositionRemuneration[0].Description}`}
                    </div>
                    <div className="job-location">
                      {item.MatchedObjectDescriptor.PositionLocationDisplay}
                    </div>
                  </div>
                </div>
              </div>
              <br />
              <div className="job-card-lower">
                <div className="apply-before-text">
                  <span>Apply Before:</span>{" "}
                  {new Date(
                    item.MatchedObjectDescriptor.ApplicationCloseDate
                  ).toLocaleDateString()}
                </div>
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
          </div>
        ))}
      </div>
      <Pagination totalPages={10} currentPage={3} />
    </>
  );
};

export default List;
