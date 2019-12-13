import React, { FunctionComponent } from 'react';
import { hot } from 'react-hot-loader/root';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import Footer from './components/Footer';
import Header from './components/Header';
import Routes from './components/Routes';
import GlobalStyle from './components/ui/GlobalStyle';
import Wrapper from './components/ui/Wrapper';
import { store } from './store';
import theme from './theme';

export const App: FunctionComponent = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <Wrapper>
        <Header/>
        <Routes/>
      </Wrapper>
      <Footer/>
    </ThemeProvider>
  </Provider>
);

export default hot(App);
