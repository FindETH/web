import React, { FunctionComponent } from 'react';
import { hot } from 'react-hot-loader/root';
import Footer from './components/Footer';
import NotificationList from './components/NotificationList';
import Providers from './components/Providers/Providers';
import GlobalStyle from './components/ui/GlobalStyle';
import Wrapper from './components/ui/Wrapper';
import theme from './theme';

export const App: FunctionComponent = ({ children }) => (
  <Providers theme={theme}>
    <NotificationList />
    <GlobalStyle />
    <Wrapper>{children}</Wrapper>
    <Footer />
  </Providers>
);

export default hot(App);
