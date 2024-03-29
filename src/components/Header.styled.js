import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  min-height: 44px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  font-size: 18px;
  background-color: lightgray;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);

  ul {
    display: flex;
    align-items: center;
  }
  li {
    margin-right: 25px;
  }
`;

export const StyledLink = styled(NavLink)`
  color: black;
  text-decoration: none;

  &.active {
    color: red;
  }
`;
