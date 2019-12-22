import React, { FunctionComponent } from 'react';
import Logo from '../Logo';
import Navigation from '../Navigation';
import Network from '../Network';
import FlexContainer from '../ui/FlexContainer';
import { FlexWrapper, HeaderContainer } from './Header.styles';

const Header: FunctionComponent = () => (
  <HeaderContainer>
    <FlexContainer>
      <FlexWrapper>
        <Logo />
        <Navigation />
      </FlexWrapper>
      <Network />
    </FlexContainer>
  </HeaderContainer>
);

export default Header;
