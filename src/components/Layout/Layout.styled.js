import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  padding: 0 16px;
  height: 60px;
  background-image: radial-gradient(circle, #5c0067 0%, #00d4ff 100%);
  border-bottom: 1px solid #ececec;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
  & ul {
    display: flex;
  }
  & li {
    margin-right: 32px;
  }
`;

export const StyledNavLink = styled(NavLink)`
  display: block;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  padding: 10px 14px;

  font-size: 22px;
  font-weight: 500;

  &.active {
    color: white;
    background-color: mediumblue;
  }
`;
