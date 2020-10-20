import { FunctionComponent } from 'react';
import { FooterContainer } from './Footer.styles';
import Links from './Links';
import Socials from './Socials';

const Footer: FunctionComponent = () => (
  <FooterContainer>
    <Links />
    <Socials />
  </FooterContainer>
);

export default Footer;
