import React from 'react';
import { CommonNavHeader, NavLogo } from './CommonNavElements';

const Nav = () => {
  return (
    <CommonNavHeader>
      <NavLogo to='/'>buzzme</NavLogo>
    </CommonNavHeader>
  );
};

export default Nav;
