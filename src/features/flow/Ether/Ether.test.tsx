import { getDefaultNetwork } from '@findeth/networks';
import React from 'react';
import createMockStore from 'redux-mock-store';
import { getComponent } from '../../../utils/test-utils';
import Flow from '../Flow';
import Ether from './Ether';

describe('Ether', () => {
  const mockStore = createMockStore();

  it('renders a flow if there is an internet connection', () => {
    const store = mockStore({
      network: {
        network: getDefaultNetwork(),
        isOnline: true,
        isConnected: true
      }
    });

    const component = getComponent(<Ether />, store);
    expect(component.find(Flow)).toHaveLength(1);
  });

  it('renders a network error when there is no internet connection', () => {
    const store = mockStore({
      network: {
        network: getDefaultNetwork(),
        isOnline: false,
        isConnected: false
      }
    });

    const component = getComponent(<Ether />, store);
    expect(component.find(Flow)).toHaveLength(0);
  });
});
