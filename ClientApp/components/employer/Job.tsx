import React from "react";
import { RouterProps, RouteComponentProps } from "react-router";
import { JobsService } from "../../services/employer";

interface JobProps {
  id?: string;
}
export const JobWithRouter: React.FC<RouteComponentProps<JobProps>> = ({
  match: { params }
}) => <Job jobId={parseInt(params.id as string)} />;

export const Job: React.FC<{ jobId: number }> = ({ jobId }) => {
  const { company, minSalary, maxSalary, location, title } = JobsService.getJob(
    jobId
  );

  return (
    <div>
      <h1>{title}</h1>
      <p>{company}</p>
      <p>{location}</p>
    </div>
  );
};
