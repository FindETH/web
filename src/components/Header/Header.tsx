import React, { FunctionComponent } from 'react';
import Logo from '../Logo';
import Navigation from '../Navigation';
import { FlexContainer, HeaderContainer } from './Header.styles';

const Header: FunctionComponent = () => (
  <HeaderContainer>
    <FlexContainer>
      <Logo />
      <Navigation />
    </FlexContainer>
  </HeaderContainer>
);

export default Header;
