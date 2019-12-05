import React from "react";
import { JobsService } from "../../services/employer";

import { useFormHook } from "../hooks/useForm";
import { IJob } from "../../ts/interfaces/IJob";
import { RouteComponentProps } from "react-router";

// const jobStub: IJob = {
//   id: 0,
//   company: "",
//   location: "",
//   minSalary: 0,
//   maxSalary: 0,
//   title: ""
// };

interface IEditJob {
  id: string;
}

export const Editjob = (props: RouteComponentProps<IEditJob>) => {
  const { history, match } = props;
  var jobStub = JobsService.getJob(parseInt(match.params.id));
  const { inputs: job, handleInputChange, handleSubmit } = useFormHook<IJob>(
    jobStub,
    () => {
      //JobsService.addJob(job);
      // history.push("/employer");
    }
  );

  return (
    <form onSubmit={handleSubmit}>
      <p>JOB TITLE</p>
      <input
        name="title"
        value={job.title}
        onChange={handleInputChange}
        type="text"
      />
      <p>Min Salary</p>
      <input
        name="minSalary"
        value={job.minSalary}
        onChange={handleInputChange}
        type="number"
      />
      <p>Max Salary</p>
      <input
        name="maxSalary"
        value={job.maxSalary}
        onChange={handleInputChange}
        type="number"
      />

      <div>
        <input type="submit" value="Save Job" />
      </div>
    </form>
  );
};
