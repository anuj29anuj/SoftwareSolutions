import React from "react";
import styled from "styled-components";

const NavLinksContainer = styled.div`
  
  display: flex;
  align-items: left;
`;

const LinksWrapper = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  
  list-style: none;
`;

const LinkItem = styled.li`
  
  padding: 1rem 1rem;
  color: #222;
  font-weight: 500;
  font-size: 14px;
  align-items: center;
  justify-content: center;
  display: flex;
  border-top: 2px solid transparent;
  

  
`;

const Link = styled.a`
padding: 0.3rem 0;
  text-decoration: none;
  color: inherit;
  font-size: inherit;
  &:hover {
    color:#3356ff;
    border-bottom: 2px solid #3356ff;
  }
`;

export function NavLinks(props) {
  return (
    <NavLinksContainer>
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
      </LinksWrapper>
    </NavLinksContainer>
  );
}
