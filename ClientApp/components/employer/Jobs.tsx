import React from "react";
import { CardContainerStyle } from "../shared/CardContainer";
import { Card } from "../shared/Card";
import { JobSalary } from "../JobSalary";
import { JobsService } from "../../services/employer";

export const Jobs = ({ history }) => {
  const jobs = JobsService.getJobs();

  return (
    <CardContainerStyle>
      {jobs.map(({ id, title, company, minSalary, maxSalary }) => {
        return (
          <Card
            onClick={() => {
              history.push(`/employer/job/${id}`);
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
