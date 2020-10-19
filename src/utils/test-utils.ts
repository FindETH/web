import { mount, ReactWrapper } from 'enzyme';
import { ReactElement } from 'react';
import { act } from 'react-dom/test-utils';
import { DeepPartial, Store } from 'redux';
import createMockStore from 'redux-mock-store';
import { ThemeProvider } from 'styled-components';
import TestProviders from '../components/Providers/TestProviders';
import { ApplicationState } from '../store';
import theme from '../theme';

export const mockStore = createMockStore<DeepPartial<ApplicationState>>();

/**
 * Wait for a promise to resolve. Useful for testing components with async logic.
 */
export const wait = async (): Promise<void> => Promise.resolve();

/**
 * Waits for a component to fully render. Useful for testing components with async logic.
 *
 * @template P
 * @param {ReactWrapper<P>} wrapper
 * @param {number} amount
 * @return {Promise<void>}
 */
// eslint-disable-next-line @typescript-eslint/ban-types
export const waitForComponentToPaint = async <P extends object = {}>(
  wrapper: ReactWrapper<P>,
  amount = 0
): Promise<void> => {
  await act(async () => {
    await new Promise((resolve) => setTimeout(resolve, amount));
    wrapper.update();
  });
};

/**
 * Mount a component with the necessary providers.
 *
 * @template P
 * @param {ReactElement<P>} component
 * @param {Store} store
 * @return {ReactWrapper<P, {}>}
 */
// eslint-disable-next-line @typescript-eslint/ban-types
export const getComponent = <P extends object = {}>(component: ReactElement<P>, store?: Store): ReactWrapper<P, {}> => {
  return mount(component, {
    wrappingComponent: TestProviders,
    wrappingComponentProps: {
      store
    }
  });
};

/**
 * Render a component with a theme provider.
 *
 * @template P
 * @param {ReactElement<P>} component
 * @return {ReactWrapper<P, {}>}
 */
// eslint-disable-next-line @typescript-eslint/ban-types
export const getStyledComponent = <P extends object = {}>(component: ReactElement<P>): ReactWrapper<P, {}> => {
  return mount(component, {
    wrappingComponent: ThemeProvider,
    wrappingComponentProps: {
      theme
    }
  });
};
