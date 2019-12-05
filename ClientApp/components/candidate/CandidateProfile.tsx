import React from "React";
import { CandidateQuestionaire } from "./CandidateQuestionaire";
import { Link } from "react-router-dom";
export const CandidateProfile = () => {
  return (
    <div
      style={{
        textAlign: "center"
      }}
    >
      <h1>Profile Page</h1>
      <h3>Matthew Ellison</h3>
      <div>Software Developer</div>
      <div>Experience: 5 years</div>
      <Link to="/candidateQuestionaire">CandidateQuestionaire</Link>
    </div>
  );
};
