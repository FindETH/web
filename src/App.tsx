import { FunctionComponent } from 'react';
import { hot } from 'react-hot-loader/root';
import Footer from './components/Footer';
import Header from './components/Header/Header';
import NotificationList from './components/NotificationList';
import Providers from './components/Providers/Providers';
import GlobalStyle from './components/ui/GlobalStyle';
import Wrapper from './components/ui/Wrapper';
import NetworkChecker from './features/network/NetworkChecker';
import theme from './theme';

export const App: FunctionComponent = ({ children }) => (
  <Providers theme={theme}>
    <NetworkChecker />
    <NotificationList />
    <GlobalStyle />
    <Wrapper>
      <Header />
      {children}
    </Wrapper>
    <Footer />
  </Providers>
);

export default hot(App);
