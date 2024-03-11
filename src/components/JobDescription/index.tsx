import React from "react";
import { Link, useParams } from "react-router-dom";
import { hData } from "../../app-config";
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
          Back
        </Link>
      </div>
      {job && (
        <>
          <h1>{job.MatchedObjectDescriptor.PositionTitle}</h1>
          <p>{job.MatchedObjectDescriptor.OrganizationName}</p>
          <div className="job-details">
            <p>
              <strong>Location:</strong>{" "}
              {job.MatchedObjectDescriptor.PositionLocationDisplay}
            </p>
            <p>
              <strong>Position Type:</strong>{" "}
              {job.MatchedObjectDescriptor.PositionSchedule[0].Name}
            </p>
            <p>
              <strong>Salary Range:</strong> $
              {job.MatchedObjectDescriptor.PositionRemuneration[0].MinimumRange}{" "}
              - $
              {job.MatchedObjectDescriptor.PositionRemuneration[0].MaximumRange}{" "}
              per{" "}
              {job.MatchedObjectDescriptor.PositionRemuneration[0].Description}
            </p>
            <p>
              <strong>Application Deadline:</strong>{" "}
              {new Date(
                job.MatchedObjectDescriptor.ApplicationCloseDate
              ).toLocaleDateString()}
            </p>
            {/* Add more job details here */}
          </div>
          <div className="job-description">
            <h2>Description</h2>
            <p>{job.MatchedObjectDescriptor.UserArea.Details.JobSummary}</p>
            <h3>Key Requirements</h3>
            <ul>
              {job.MatchedObjectDescriptor.UserArea.Details.KeyRequirements.map(
                (requirement, index) => (
                  <li key={index}>{requirement}</li>
                )
              )}
            </ul>
            {/* Add more job details here */}
          </div>
          <a
            href={job.MatchedObjectDescriptor.ApplyURI[0]}
            className="apply-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            Apply Now
          </a>
        </>
      )}
    </div>
  );
};

export default JobDescription;
