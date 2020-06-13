import React, { FunctionComponent } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { Provider } from 'react-redux';
import { Store } from 'redux';
import { ApplicationState, createStore } from '../../../store';

interface Props {
  store: Store<ApplicationState>;
}

const defaultStore = createStore();

const TestProviders: FunctionComponent<Props> = ({ store, children }) => (
  <HelmetProvider context={{}}>
    <Provider store={store ?? defaultStore}>{children}</Provider>
  </HelmetProvider>
);

export default TestProviders;
