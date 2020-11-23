import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CommonNavHeader = styled.header`
  display: flex;
  justify-content: center;
  align-content: center;
  background: #01011e;
  height: 80px;
`;

export const NavLogo = styled(Link)`
  cursor: pointer;
  display: flex;
  align-items: center;
  color: whitesmoke;
  text-decoration: none;
  font-size: 24px;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: capitalize;
`;
