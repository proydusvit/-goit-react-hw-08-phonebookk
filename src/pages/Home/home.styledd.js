import styled from "styled-components";
import { NavLink } from 'react-router-dom';

export const LinkHome = styled(NavLink)`
width: 100px;
text-align: center;
margin-top: 50px;
border: 1px solid white;
border-radius: 50px;
font-size: 25px;
text-decoration: none;
color: black;
padding: 50px 90px;

background: rgba(255, 255, 255, 0.2);
border-radius: 16px;
border:2px solid black;
&:hover {
  background: rgb(130, 130, 179);
  box-shadow: 4px 4px 60px 8px rgb(130, 130, 179);
}
`;
export const Con = styled.div`
display: flex;
flex-direction:  column;
align-items: center;
justify-content: center;
`;
export const Text = styled.p`
font-size: 60px;
`;