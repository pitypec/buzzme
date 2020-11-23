import React from 'react';
import { FaBars } from 'react-icons/fa';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavMenu,
  NavItem,
  NavBtn,
  NavBtnLink,
  NavLinks,
  MobileIcon
} from './NavbarElement';

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to='/'>btssocial</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to='about'>about</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='services'>services</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='discover'>discover</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='signup'>sign up</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to='/signin'>sign in</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
