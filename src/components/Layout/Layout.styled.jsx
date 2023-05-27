import styled from '@emotion/styled';

import { HiOutlineFilm } from 'react-icons/hi';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  display: flex;
  position: relative;
  justify-content: space-around;
  align-items: center;
  padding: 20px;
  background-color: #25334a;
  color: #e0e1dd;
  font-size: 20px;
  font-weight: 500;
  border-radius: 5px;
`;

export const Icon = styled(HiOutlineFilm)`
  width: 30px;
  height: 30px;
  position: absolute;
  left: 18px;
`;

export const StyledNavLink = styled(NavLink)`
  padding: 10px;
  border-radius: 5px;
  &:hover,
  &:focus {
    background-color: #2e4059;
    color: #fff;
  }
  &.active {
    color: #fff;
    border-bottom: #fff 1px solid;
    box-shadow: 0px 7px 8px -5px rgba(255, 255, 255, 0.47);
  }
`;
