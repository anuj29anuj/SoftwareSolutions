import React from "react";
import styled from "styled-components";  

 const  Started=(props)=>{  

  return (    
      <EllipseContainer >{props.children}</EllipseContainer>    
  );

}

const EllipseContainer = styled.button`
--color:#fff;
--background-color:#3356FF;

height:33px;
padding: 0.6rem 1.8rem;

font-size: 9px;
font-weight: 100;
border-radius: 30px;
border:#3356ff;


cursor: pointer;


&:not(:last-of-type) {
  margin-right: 7px;
}

color: var(--color,#3356FF);
   background-color:var(--background-color, transparent);
  &:hover {
    color: var(--background-color,#fff);
    background-color: var(--color,#3356FF);
    border: 2px solid #3356FF;
  };


`;


  

 export default Started; 
