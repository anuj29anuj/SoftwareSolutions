import React, { useState } from "react";
import styled from "styled-components";
import { Accessibility } from "./accessibility";
import { MenuToggle } from "./menuToggle";

const NavLinksContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  
`;

const LinksWrapper = styled.ul`
  
  display: flex;
  height: 100%;
  list-style: none;
  background-color: #fff;
  width: 100%;
  flex-direction: column;
  position: fixed;
  top: 65px;
  left: 0;
  align-items:center;
`;

const LinkItem = styled.li`
  width: 100%;
  padding: 1rem 0;
  color: #222;
  font-weight: 500;
  font-size: 16px;
  display: flex;
  justify-content:center;  
`;

const Link = styled.a`
  text-decoration: none;
  color: inherit;
  font-size: inherit;
  padding: 0.1rem 0.2rem;
  &:hover {
    border-radius: 30px;
border:2px solid #3356ff;
color:#3356ff
  };
`;

const Marginer = styled.div`
  height: 2em;
`;

export function MobileNavLinks(props) {
  const [isOpen, setOpen] = useState(false);

  return (
    <NavLinksContainer>
      <MenuToggle isOpen={isOpen} toggle={() => {
        props.toggleopen(!isOpen)
        setOpen(!isOpen)} }/>
      {isOpen && (
        <LinksWrapper>
          <LinkItem>
            <Link href="#">Integration</Link>
          </LinkItem>
          <LinkItem>
            <Link href="#">Pricing</Link>
          </LinkItem>
          <LinkItem>
            <Link href="#">Blog</Link>
          </LinkItem>
          <LinkItem>
            <Link href="#">About us</Link>
          </LinkItem>
          <Marginer />
          <Accessibility />
        </LinksWrapper>
      )}
    </NavLinksContainer>
  );
}
