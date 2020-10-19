import { getDefaultNetwork, getSupportedNetworks } from '@findeth/networks';
import Button from '../../../components/Button';
import Dropdown from '../../../components/Dropdown';
import { DropdownOption } from '../../../components/Dropdown/Dropdown.styles';
import { getComponent, mockStore } from '../../../utils/test-utils';
import { setNetwork } from '../../network';
import NetworkSelector from './NetworkSelector';

const networks = getSupportedNetworks();

describe('NetworkSelector', () => {
  it('renders a dropdown with all supported networks', () => {
    const store = mockStore({
      network: {
        network: getDefaultNetwork()
      }
    });

    const component = getComponent(<NetworkSelector onReset={jest.fn} onNext={jest.fn} />, store);
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
        network: getDefaultNetwork(),
        isConnected: true
      }
    });

    const fn = jest.fn();
    const component = getComponent(<NetworkSelector onReset={jest.fn} onNext={fn} />, store);

    const button = component.find(Button);
    button.simulate('click');

    expect(fn).toHaveBeenCalledTimes(1);
  });

  it('does not call onNext when not connected to a network', () => {
    const store = mockStore({
      network: {
        network: getDefaultNetwork(),
        isConnected: false
      }
    });

    const fn = jest.fn();
    const component = getComponent(<NetworkSelector onReset={jest.fn} onNext={fn} />, store);

    const button = component.find(Button);
    button.simulate('click');

    expect(fn).toHaveBeenCalledTimes(0);
  });
});
