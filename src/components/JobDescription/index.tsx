import React from "react";
import { Link, useParams } from "react-router-dom";
import { hData } from "../../app-config";
import job_log from "../../Assets/job_icon.png";
import "./index.scss";

interface Job {
  MatchedObjectId: string;
  MatchedObjectDescriptor: {
    PositionID: string;
    PositionTitle: string;
    PositionURI: string;
    ApplyURI: string[];
    PositionLocationDisplay: string;
    PositionLocation: {
      LocationName: string;
      CountryCode: string;
      CountrySubDivisionCode: string;
      CityName: string;
      Longitude: number;
      Latitude: number;
    }[];
    OrganizationName: string;
    DepartmentName: string;
    JobCategory: { Name: string; Code: string }[];
    JobGrade: { Code: string }[];
    PositionSchedule: { Name: string; Code: string }[];
    PositionOfferingType: { Name: string; Code: string }[];
    QualificationSummary: string;
    PositionRemuneration: {
      MinimumRange: string;
      MaximumRange: string;
      RateIntervalCode: string;
      Description: string;
    }[];
    PositionStartDate: string;
    PositionEndDate: string;
    PublicationStartDate: string;
    ApplicationCloseDate: string;
    PositionFormattedDescription: { Label: string; LabelDescription: string }[];
    UserArea: {
      Details: {
        JobSummary: string;
        WhoMayApply: { Name: string; Code: string };
        LowGrade: string;
        HighGrade: string;
        PromotionPotential: string;
        OrganizationCodes: string;
        Relocation: string;
        HiringPath: string[];
        AgencyContactWebsite?: string;
        MajorDuties: string[];
        Education: string;
        Requirements: string;
        Evaluations: string;
        HowToApply: string;
        WhatToExpectNext: string;
        RequiredDocuments: string;
        Benefits: string;
        BenefitsUrl: string;
        BenefitsDisplayDefaultText: boolean;
        OtherInformation: string;
        KeyRequirements: string[];
        WithinArea: string;
        CommuteDistance: string;
        ServiceType: string;
        AnnouncementClosingType: string;
        AgencyContactEmail: string;
        SecurityClearance: string;
        DrugTestRequired: string;
        AdjudicationType: string[];
        TeleworkEligible: boolean;
        RemoteIndicator: boolean;
      };
      IsRadialSearch: boolean;
    };
  };
  RelevanceRank: number;
}

const JobDescription: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const job: Job | undefined = hData.find(
    (item) => item.MatchedObjectId === id
  );
  return (
    <div className="jd-div">
      <div className="back-button">
        <Link to="/" className="btn-primary">
          Back to Job Listings
        </Link>
      </div>
      {job && (
        <>
          <div className="job-header">
            <div className="job-details">
              <div className="header-box">
                <img src={job_log} alt="Job Icon" className="job-icon" />
                <div className="title-organization">
                  <h1 className="job-title">
                    {job.MatchedObjectDescriptor.PositionTitle}
                  </h1>
                  <p className="job-organization">
                    {job.MatchedObjectDescriptor.OrganizationName}
                  </p>
                </div>
              </div>

              <p className="job-location">
                Location: {job.MatchedObjectDescriptor.PositionLocationDisplay}
              </p>
              <p className="job-schedule">
                Position Type:{" "}
                {job.MatchedObjectDescriptor.PositionSchedule[0].Name}
              </p>
              <p className="job-salary">
                Salary Range: $
                {
                  job.MatchedObjectDescriptor.PositionRemuneration[0]
                    .MinimumRange
                }{" "}
                - $
                {
                  job.MatchedObjectDescriptor.PositionRemuneration[0]
                    .MaximumRange
                }{" "}
                per{" "}
                {
                  job.MatchedObjectDescriptor.PositionRemuneration[0]
                    .Description
                }
              </p>
              <p className="job-category">
                Category:{" "}
                {job.MatchedObjectDescriptor.JobCategory.map(
                  (category) => category.Name
                ).join(", ")}
              </p>
              <p className="job-description">
                <strong>Description: </strong>
                {job.MatchedObjectDescriptor.QualificationSummary}
              </p>
            </div>
          </div>
          <div className="job-description">
            <h3>Major Duties</h3>
            <ul className="major-duties">
              {job.MatchedObjectDescriptor.UserArea.Details.MajorDuties.map(
                (duty, index) => (
                  <li key={index}>{duty}</li>
                )
              )}
            </ul>
          </div>
          <div className="how-to-apply">
            <h2>How to Apply</h2>
            <p>{job.MatchedObjectDescriptor.UserArea.Details.HowToApply}</p>
            <a
              href={job.MatchedObjectDescriptor.ApplyURI[0]}
              className="apply-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              Apply Now
            </a>
          </div>
          <div className="additional-info">
            <h2>Additional Information</h2>
            <p>
              <strong>Education:</strong>{" "}
              {job.MatchedObjectDescriptor.UserArea.Details.Education}
            </p>
            <p>
              <strong>Requirements:</strong>{" "}
              {job.MatchedObjectDescriptor.UserArea.Details.Requirements}
            </p>
            <p>
              <strong>Evaluations:</strong>{" "}
              {job.MatchedObjectDescriptor.UserArea.Details.Evaluations}
            </p>
            <p>
              <strong>Benefits:</strong>{" "}
              {job.MatchedObjectDescriptor.UserArea.Details.Benefits}
            </p>
            <p>
              <strong>Agency Contact Email:</strong>{" "}
              {job.MatchedObjectDescriptor.UserArea.Details.AgencyContactEmail}
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default JobDescription;
