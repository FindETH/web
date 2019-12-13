import React, { FunctionComponent } from 'react';
import { FlexContainer, FooterContainer } from './Footer.styles';
import Info from './Info';
import PoweredBy from './PoweredBy';

const Footer: FunctionComponent = () => (
  <FooterContainer>
    <FlexContainer>
      <PoweredBy />
      <Info />
    </FlexContainer>
  </FooterContainer>
);

export default Footer;
