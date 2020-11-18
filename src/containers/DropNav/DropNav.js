import React from 'react';
import {
  SideNavContainer,
  SideNavWrapper,
  CloseIcon,
  SideNavMenu,
  SideNavMenuItem,
  MobileBtn,
  MobileBtnWrapper,
  Icon
} from './DropNavElements';

const DropNav = ({ isOpen, toggle }) => {
  return (
    <>
      <SideNavContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
          <CloseIcon />
        </Icon>
        <SideNavWrapper>
          <SideNavMenu>
            <SideNavMenuItem to='about' onClick={toggle}>
              about
            </SideNavMenuItem>
            <SideNavMenuItem to='services' onClick={toggle}>
              services
            </SideNavMenuItem>
            <SideNavMenuItem to='discover' onClick={toggle}>
              discover
            </SideNavMenuItem>
            <SideNavMenuItem to='sign up' toggle={toggle}>
              sign up
            </SideNavMenuItem>
          </SideNavMenu>
          <MobileBtnWrapper>
            <MobileBtn to='/signin'>sign in</MobileBtn>
          </MobileBtnWrapper>
        </SideNavWrapper>
      </SideNavContainer>
    </>
  );
};

export default DropNav;
