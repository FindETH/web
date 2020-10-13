import { getDefaultNetwork, getSupportedNetworks } from '@findeth/networks';
import React from 'react';
import createMockStore from 'redux-mock-store';
import Button from '../../../components/ui/Button';
import Dropdown from '../../../components/ui/Dropdown';
import { DropdownOption } from '../../../components/ui/Dropdown/Dropdown.styles';
import { setNetwork } from '../../../store/network';
import { getComponent } from '../../../utils/test-utils';
import NetworkSelector from './NetworkSelector';

describe('NetworkSelector', () => {
  const mockStore = createMockStore();
  const networks = getSupportedNetworks();

  it('renders a dropdown with all supported networks', () => {
    const component = getComponent(<NetworkSelector onReset={jest.fn} onNext={jest.fn} />);
    const dropdown = component.find(Dropdown);

    expect(dropdown.find(DropdownOption)).toHaveLength(networks.length);
  });

  it('dispatches setNetwork when a network is selected', () => {
    const store = mockStore({
      network: {
        network: getDefaultNetwork()
      }
    });

    const component = getComponent(<NetworkSelector onReset={jest.fn} onNext={jest.fn} />, store);
    const dropdown = component.find(Dropdown);

    dropdown.simulate('change', {
      target: {
        value: networks[1].name
      }
    });

    expect(store.getActions()).toContainEqual(setNetwork(networks[1]));
  });

  it('calls onNext when the button is pressed', () => {
    const store = mockStore({
      network: {
        network: getDefaultNetwork()
      }
    });

    const fn = jest.fn();
    const component = getComponent(<NetworkSelector onReset={jest.fn} onNext={fn} />, store);

    const button = component.find(Button);
    button.simulate('click');

    expect(fn).toHaveBeenCalledTimes(1);
  });
});
