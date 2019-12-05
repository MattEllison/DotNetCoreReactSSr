import React from "react";
import { Link, Route, BrowserRouter } from "react-router-dom";
import { PostJob } from "./PostJob";
import styled from "styled-components";

import { Jobs } from "./Jobs";
import { Editjob } from "./EditJob";

const EmployerOptionsStyle = styled.div`
  margin: 10px;
  padding: 10px;
  border: 1px solid black;
`;
const EmployerHeaderStyle = styled.div`
  a {
    padding-left: 10px;
  }
`;

export const Employer = () => {
  return (
    <>
      <h2>Employer</h2>
      <EmployerHeaderStyle>
        <Link to="/employer">Jobs</Link>
        <Link to="/employer/post">Post a Job</Link>
      </EmployerHeaderStyle>

      <EmployerOptionsStyle>
        <Route exact path="/employer/job/:id" component={Editjob}></Route>
        <Route exact path="/employer/post" component={PostJob}></Route>
        <Route exact path="/employer" component={Jobs}></Route>
      </EmployerOptionsStyle>
    </>
  );
};
