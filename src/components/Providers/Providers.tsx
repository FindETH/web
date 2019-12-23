import React, { FunctionComponent } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { Provider } from 'react-redux';
import { Store } from 'redux';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import NotificationProvider from '../NotificationProvider';

interface Props {
  store: Store;
  theme: DefaultTheme;
}

const Providers: FunctionComponent<Props> = ({ store, theme, children }) => (
  <HelmetProvider>
    <Provider store={store}>
      <NotificationProvider>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </NotificationProvider>
    </Provider>
  </HelmetProvider>
);

export default Providers;
