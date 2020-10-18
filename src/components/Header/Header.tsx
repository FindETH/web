import { FunctionComponent } from 'react';
import Container from '../Container';
import Logo from '../Logo';
import Navigation from '../Navigation';
import { HeaderContainer } from './Header.styles';

const Header: FunctionComponent = () => (
  <HeaderContainer>
    <Container>
      <Logo />
      <Navigation />
    </Container>
  </HeaderContainer>
);

export default Header;
