import { FunctionComponent } from 'react';
import Footer from './components/Footer';
import GlobalStyle from './components/GlobalStyle';
import Header from './components/Header/Header';
import Providers from './components/Providers/Providers';
import Wrapper from './components/Wrapper';
import NetworkChecker from './features/network/NetworkChecker';

export const App: FunctionComponent = ({ children }) => (
  <Providers>
    <NetworkChecker />
    <GlobalStyle />
    <Wrapper>
      <Header />
      {children}
    </Wrapper>
    <Footer />
  </Providers>
);

export default App;
