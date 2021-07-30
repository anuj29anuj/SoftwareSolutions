import React from "react";
import styled from "styled-components";

const AccessibilityContainer = styled.div`
  display: flex;
  align-self:center;
`;


const Access = styled.button`
  
  padding: 0.1rem 0.5rem;
  color: #3356FF;
  height:40px;
  margin-top:1rem;
  font-size: 13px;
  font-weight: 600;
  border-radius: 20px;
  background-color: transparent;
  border: 2px solid #3356FF;
  transition: all 240ms ease-in-out;
  cursor: pointer;
margin-right:8rem;
  &:hover {
    color: #fff;
    background-color: #3356FF;
  }
  @media (max-width: 700px) {
    margin-right:1rem;
  }


`;

export function Accessibility(props) {
  return (
    <AccessibilityContainer>
      
      <Access>Get early access</Access>
    </AccessibilityContainer>
  );
}


