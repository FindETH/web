import { getDefaultNetwork } from '@findeth/networks';
import { getComponent, mockStore } from '../../utils/test-utils';
import Network from './Network';

describe('Network', () => {
  it('shows the current network when online', () => {
    const store = mockStore({
      network: {
        network: getDefaultNetwork(),
        isOnline: true,
        isConnected: true
      }
    });

    const component = getComponent(<Network />, store);
    expect(component.text()).toContain(getDefaultNetwork().name);
  });

  it('shows a placeholder offline network when offline', () => {
    const store = mockStore({
      network: {
        network: getDefaultNetwork(),
        isOnline: false,
        isConnected: false
      }
    });

    const component = getComponent(<Network />, store);
    expect(component.text()).toContain('Offline');
  });
});
