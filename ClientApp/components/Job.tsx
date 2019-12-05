import React from "react";

export interface IJob {
  id: number;
  title: string;
  minSalary?: number;
  maxSalary?: number;
  company?: string;
  location?: string;
}

export const Job: React.FC<IJob> = props => {
  const { company, minSalary, maxSalary, location, title } = props;

  return (
    <div>
      <h1>{title}</h1>
      <p>{company}</p>
      <p>{location}</p>
    </div>
  );
};
