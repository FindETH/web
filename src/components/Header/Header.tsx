import { FunctionComponent } from 'react';
import Logo from '../Logo';
import Navigation from '../Navigation';
import Container from '../ui/Container';
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
