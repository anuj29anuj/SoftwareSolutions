import React from "react";
import styled from "styled-components";  

 const  Play=(props)=>{  

  return (    
      <EllipseContainer >{props.children}</EllipseContainer>    
  );

}

const EllipseContainer = styled.button`
--color:#3356FF;
--background-color:#fff;

outline: 0;
padding: 8px 1em;
width:8rem;
flex-direction:column;
font-size: 11px;
font-weight: 600;
border-radius: 20px;
border:#3356ff;
margin-top:0.5rem;

cursor: pointer;



color: var(--color,#3356FF);
   background-color:var(--background-color, transparent);
  &:hover {
    
    border: 2px solid #3356FF;
  };


`;


  

 export default Play; 
