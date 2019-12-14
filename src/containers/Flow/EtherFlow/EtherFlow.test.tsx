import { mount } from 'enzyme';
import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { ApplicationState } from '../../../store';
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
        wrappingComponent: Provider,
        wrappingComponentProps: { store }
      })
    ).toMatchSnapshot();
  });
});
