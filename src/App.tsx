import React, { FunctionComponent } from 'react';
import { hot } from 'react-hot-loader/root';
import Footer from './components/Footer';
import Header from './components/Header';
import Providers from './components/Providers/Providers';
import Routes from './components/Routes';
import GlobalStyle from './components/ui/GlobalStyle';
import Wrapper from './components/ui/Wrapper';
import { store } from './store';
import theme from './theme';

export const App: FunctionComponent = () => (
  <Providers store={store} theme={theme}>
    <GlobalStyle />
    <Wrapper>
      <Header />
      <Routes />
    </Wrapper>
    <Footer />
  </Providers>
);

export default hot(App);
