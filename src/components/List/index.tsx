import React from "react";
import { AuthData, hData } from "../../app-config";
import { useState, useEffect } from "react";
import "./index.scss";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
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
      <div className="d-flex flex-wrap space-around">
        {
             list.map((item:any, index:any) =>(
              <Card key={index} >
                  <Card.Header>{item.MatchedObjectDescriptor.OrganizationName || 'unknown'}</Card.Header>
                  <Card.Body>
                    <Card.Title>Special title treatment</Card.Title>
                    <Card.Text>
                      With supporting text below as a natural lead-in to additional
                      content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
             ))
      }
      </div>
    </>
  );
};

export default List;
