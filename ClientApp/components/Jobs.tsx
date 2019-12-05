import React from "react";

import { JobsService } from "../services/employer";
import { Card } from "./shared/Card";
import { CardContainerStyle } from "./shared/CardContainer";
import { JobSalary } from "./JobSalary";

export const Jobs = ({ history }) => {
  const jobs = JobsService.getJobs();

  return (
    <CardContainerStyle>
      {jobs.map(({ id, title, company, minSalary, maxSalary }) => {
        return (
          <Card
            onClick={() => {
              history.push(`/job/${id}`);
            }}
            title={title}
            key={id}
          >
            <div>{company}</div>
            <JobSalary minSalary={minSalary} maxSalary={maxSalary} />
          </Card>
        );
      })}
    </CardContainerStyle>
  );
};
