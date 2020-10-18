import { FunctionComponent } from 'react';
import { hot } from 'react-hot-loader/root';
import Footer from './components/Footer';
import GlobalStyle from './components/GlobalStyle';
import Header from './components/Header/Header';
import Providers from './components/Providers/Providers';
import Wrapper from './components/Wrapper';
import NetworkChecker from './features/network/NetworkChecker';
import theme from './theme';

export const App: FunctionComponent = ({ children }) => (
  <Providers theme={theme}>
    <NetworkChecker />
    <GlobalStyle />
    <Wrapper>
      <Header />
      {children}
    </Wrapper>
    <Footer />
  </Providers>
);

export default hot(App);
