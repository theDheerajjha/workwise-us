import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { hData } from "../../temp-data";
import jobLog from "../../Assets/job_icon.png";
import "./index.scss";

const List = () => {
  const [list, setList] = useState<any[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    setList(hData);
  }, []);

  const handleApply = (jobId: string) => {
    navigate(`/job/${jobId}`);
  };

  return (
    <div className="d-flex main-div flex-wrap justify-content-center">
      {list.map((item: any) => {
        const { MatchedObjectId, MatchedObjectDescriptor } = item;
        const {
          PositionTitle,
          OrganizationName,
          PositionRemuneration,
          PositionLocationDisplay,
          ApplicationCloseDate,
        } = MatchedObjectDescriptor;

        return (
          <div className="job-card" key={MatchedObjectId}>
            <div className="content-card">
              <div className="job-card-upper">
                <div className="jobs-logo">
                  <img src={jobLog} alt="Company Logo" />
                </div>
                <div className="job-title-exp">
                  <div className="job-designation">{PositionTitle}</div>
                  <div className="job-company-name">{OrganizationName}</div>
                  <div className="job-details-short">
                    <div className="expected-salary">
                      {`Salary Range: $${PositionRemuneration[0].MinimumRange} - $${PositionRemuneration[0].MaximumRange} ${PositionRemuneration[0].Description}`}
                    </div>
                    <div className="job-location">{PositionLocationDisplay}</div>
                  </div>
                </div>
              </div>

              <div className="job-card-lower">
                <div className="apply-before-text">
                  <span>Apply Before:</span>{" "}
                  {new Date(ApplicationCloseDate).toLocaleDateString()}
                </div>
                <div className="apply-button-div">
                  <button
                    className="btn-primary apply-button"
                    onClick={() => handleApply(MatchedObjectId)}
                  >
                    Apply
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default List;