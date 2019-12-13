import React, { FunctionComponent } from 'react';
import { hot } from 'react-hot-loader/root';
import { ThemeProvider } from 'styled-components';
import Footer from './components/Footer';
import Header from './components/Header';
import Routes from './components/Routes';
import GlobalStyle from './components/ui/GlobalStyle';
import Wrapper from './components/ui/Wrapper';
import theme from './theme';

export const App: FunctionComponent = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Wrapper>
      <Header />
      <Routes />
    </Wrapper>
    <Footer />
  </ThemeProvider>
);

export default hot(App);
