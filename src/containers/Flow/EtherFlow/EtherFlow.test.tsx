import { mount } from 'enzyme';
import React from 'react';
import configureStore from 'redux-mock-store';
import TestProviders from '../../../components/Providers/TestProviders';
import { ApplicationState } from '../../../store';
import theme from '../../../theme';
import EtherFlow from './EtherFlow';

const mockStore = configureStore<Partial<ApplicationState>>();

describe('Flow', () => {
  it('renders', () => {
    const store = mockStore({
      derivation: {
        isFlow: false,
        isSearching: false
      }
    });

    expect(
      mount(<EtherFlow />, {
        wrappingComponent: TestProviders,
        wrappingComponentProps: { store, theme }
      })
    ).toMatchSnapshot();
  });
});
