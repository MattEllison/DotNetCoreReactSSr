import React from "react";
import styled from "styled-components";

const DisplayFlex = styled.div`
  display: flex;
  width: 100px;
  justify-content: space-between;
`;

export const JobSalary = ({ minSalary, maxSalary }) => {
  return (
    <DisplayFlex>
      <div>
        {new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
          minimumFractionDigits: 0
        }).format(minSalary / 1000)}
      </div>
      <div>-</div>
      <div>
        {new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
          minimumFractionDigits: 0
        }).format(maxSalary)}
      </div>
    </DisplayFlex>
  );
};
