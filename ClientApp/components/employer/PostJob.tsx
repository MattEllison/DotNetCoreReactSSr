import React from "react";
import { JobsService } from "../../services/employer";

import { useFormHook } from "../hooks/useForm";
import { IJob } from "../../ts/interfaces/IJob";

const jobStub: IJob = {
  id: 0,
  company: "",
  location: "",
  minSalary: 0,
  maxSalary: 0,
  title: ""
};
export const PostJob = ({ history }) => {
  const { inputs: job, handleInputChange, handleSubmit } = useFormHook<IJob>(
    jobStub,
    () => {
      JobsService.addJob(job);
      history.push("/employer");
    }
  );

  return (
    <form onSubmit={handleSubmit}>
      <p>Title</p>
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
        <input type="submit" value="Create Job" />
      </div>
    </form>
  );
};
