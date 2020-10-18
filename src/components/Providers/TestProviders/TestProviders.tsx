import { FunctionComponent } from 'react';
import { HelmetData, HelmetProvider } from 'react-helmet-async';
import { Provider } from 'react-redux';
import { Store } from 'redux';
import { ApplicationState, createStore } from '../../../store';
import Providers from '../Providers';

interface Props {
  store: Store<ApplicationState>;
}

const defaultStore = createStore();
export const helmetContext: {
  helmet: HelmetData;
} = { helmet: {} as HelmetData };

const TestProviders: FunctionComponent<Props> = ({ store, children }) => (
  <Providers>
    <HelmetProvider context={helmetContext}>
      <Provider store={store ?? defaultStore}>{children}</Provider>
    </HelmetProvider>
  </Providers>
);

export default TestProviders;
