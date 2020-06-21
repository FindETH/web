import React, { FunctionComponent } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { Provider } from 'react-redux';
import { Store } from 'redux';
import { DefaultTheme } from 'styled-components';
import { ApplicationState, createStore } from '../../../store';
import Providers from '../Providers';

interface Props {
  theme: DefaultTheme;
  store: Store<ApplicationState>;
}

const defaultStore = createStore();

const TestProviders: FunctionComponent<Props> = ({ theme, store, children }) => (
  <Providers theme={theme}>
    <HelmetProvider context={{}}>
      <Provider store={store ?? defaultStore}>{children}</Provider>
    </HelmetProvider>
  </Providers>
);

export default TestProviders;
