import { ActiveButton } from 'components/Tweet/Tweet.styled';
import styled from 'styled-components';

export const StyledSection = styled.div`
  padding-top: 24px;
`;

export const StyledHeader = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  h1 {
    font-size: 55px;
    color: black;
    font-family: fantasy;
    text-align: center;
    margin-bottom: 24px;
  }
`;

export const StyledHPActiveBtn = styled(ActiveButton)`
  margin: 0 auto;
  background-color: bisque;
`;
