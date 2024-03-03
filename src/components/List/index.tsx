import React from "react";
import { AuthData, hData } from "../../app-config";
import { useState, useEffect } from "react";
import Pagination from "../Pagination";
import "./index.scss";
const List = () => {
  const [list, setList] = useState<any>([]);

  useEffect(() => {
    setList(hData);
    // getJobList();
  }, []);

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
        {list.map((item: any, index: any) => (
          <div className="card-container">
            <div className="card">
              <div className="card-header">{item.MatchedObjectDescriptor.OrganizationName || 'unknown'}</div>
              <div className="card-body">
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <button className="btn-primary">Go somewhere</button>
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
