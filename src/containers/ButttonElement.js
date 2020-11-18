import styled from 'styled-components';
import { Link as LinkS } from 'react-scroll';

export const Button = styled(LinkS)`
  padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
  text-decoration: none;
  outline: none;
  white-space: nowrap;
  text-transform: capitalize;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ dark }) => (dark ? '#fff' : '#01011E')};
  background: ${({ primary }) => (primary ? '#4b00ff' : '#01011E')};
  border-radius: 50px;

  &:hover {
    background: ${({ primary }) => (primary ? '#432190' : '#4b00ff')};
    transition: all 0.3s ease-in-out;
  }
`;
