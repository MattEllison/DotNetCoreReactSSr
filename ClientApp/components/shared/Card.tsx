import React from "react";
import styled from "styled-components";

interface CardProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  title?: string;
}
const CardStyle = styled.div`
  border: 1px solid black;
  padding: 10px;
  cursor: pointer;
`;
export const Card: React.FC<CardProps> = ({ title, children, ...props }) => (
  <CardStyle {...props}>
    <div></div>
    <b>{title}</b>
    {children}
  </CardStyle>
);
