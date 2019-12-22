import React, { FunctionComponent } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { Provider } from 'react-redux';
import { Store } from 'redux';
import { DefaultTheme, ThemeProvider } from 'styled-components';

interface Props {
  store: Store;
  theme: DefaultTheme;
}

const Providers: FunctionComponent<Props> = ({ store, theme, children }) => (
  <HelmetProvider>
    <Provider store={store}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </Provider>
  </HelmetProvider>
);

export default Providers;
