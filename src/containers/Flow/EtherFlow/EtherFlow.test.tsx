import { mount } from 'enzyme';
import React from 'react';
import configureStore from 'redux-mock-store';
import Providers from '../../../components/Providers';
import { ApplicationState } from '../../../store';
import theme from '../../../theme';
import EtherFlow from './EtherFlow';

const mockStore = configureStore<Partial<ApplicationState>>();

describe('Flow', () => {
  it('renders', () => {
    const store = mockStore({
      derivation: {
        isFlow: false
      }
    });

    expect(
      mount(<EtherFlow />, {
        wrappingComponent: Providers,
        wrappingComponentProps: { store, theme }
      })
    ).toMatchSnapshot();
  });
});
