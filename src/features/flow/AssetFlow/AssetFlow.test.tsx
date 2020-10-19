import { getDefaultNetwork } from '@findeth/networks';
import createMockStore from 'redux-mock-store';
import { SearchType } from '../../../types/search';
import { getComponent } from '../../../utils/test-utils';
import { setType } from '../../search';
import Flow from '../Flow';
import AssetFlow from './AssetFlow';

describe('AssetFlow', () => {
  const mockStore = createMockStore();

  it('renders a flow if there is an internet connection', () => {
    const store = mockStore({
      flow: {
        isFlow: true
      },
      network: {
        network: getDefaultNetwork(),
        isOnline: true,
        isConnected: true
      }
    });

    const component = getComponent(<AssetFlow />, store);
    expect(component.find(Flow)).toHaveLength(1);
  });

  it('renders a network error when there is no internet connection', () => {
    const store = mockStore({
      flow: {
        isFlow: true
      },
      network: {
        network: getDefaultNetwork(),
        isOnline: false,
        isConnected: false
      }
    });

    const component = getComponent(<AssetFlow />, store);
    expect(component.find(Flow)).toHaveLength(0);
  });

  it('sets the search type to ether', () => {
    const store = mockStore({
      flow: {
        isFlow: true
      },
      network: {
        network: getDefaultNetwork(),
        isOnline: false,
        isConnected: false
      }
    });

    getComponent(<AssetFlow />, store);

    expect(store.getActions()).toContainEqual(setType(SearchType.ASSETS));
  });
});
