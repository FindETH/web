import React, { FunctionComponent } from 'react';
import { FlexContainer, FooterContainer } from './Footer.styles';
import Info from './Info';

const Footer: FunctionComponent = () => (
  <FooterContainer>
    <FlexContainer>
      <div />
      <Info />
    </FlexContainer>
  </FooterContainer>
);

export default Footer;
