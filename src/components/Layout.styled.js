import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  margin-right: 20px;
  &:last-child {
    margin-right: 0px;
  }
  :hover {
    color: orangered;
  }
`;

export const Header = styled.header`
  padding: 20px 0;
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
`;
