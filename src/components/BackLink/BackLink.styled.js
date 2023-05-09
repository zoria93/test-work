import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 24px 8px;
  color: #373737;
  text-decoration: none;
  font-weight: 500;
  text-transform: uppercase;

  :hover {
    color: bisque;
  }
`;
