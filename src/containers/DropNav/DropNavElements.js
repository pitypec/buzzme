import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';
import { FaTimes } from 'react-icons/fa';

export const SideNavContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #01011e;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  color: #fff;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
  top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  cursor: pointer;
  background: transparent;
  font-size: 2rem;
  outline: none;
`;

export const CloseIcon = styled(FaTimes)`
  color: #fff;
`;

export const SideNavWrapper = styled.div`
  color: #fff;
`;
export const SideNavMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  margin-top: 20px;

  @media screen and (max-width: 468px) {
    grid-template-rows: repeat(6, 60px);
  }
`;

export const SideNavMenuItem = styled(LinkS)`
  display: flex;
  justify-content: center;
  align-content: center;
  font-size: 1.5rem;
  cursor: pointer;
  list-style: none;
  color: #fff;
  transition: 0.2s ease-in-out;
  text-transform: capitalize;

  &:hover {
    transition: 0.2s ease-in-out;
    color: #4b00ff;
  }
`;

export const MobileBtnWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
export const MobileBtn = styled(LinkR)`
  cursor: pointer;
  border-radius: 50px;
  background: #4b00ff;
  white-space: nowrap;
  padding: 16px 64px;
  color: #fff;
  font-size: 16px;
  outline: none;
  border: none;
  list-style: none;
  text-transform: capitalize;
  text-decoration: none;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #432190;
  }
`;
