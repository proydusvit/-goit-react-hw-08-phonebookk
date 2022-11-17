import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
display: flex;

`;


export const Header = styled.header`
background-color: rgb(130, 130, 179);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 0;

  > nav {
    display: flex;
  }
`;
export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: white;
  font-size: 35px;
  font-weight: 500;
  
`;
