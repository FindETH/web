import { DEFAULT_ETH, getFullPath } from '@findeth/wallets';
import { navigate } from 'gatsby';
import { CardContent } from '../../components/Card/Card.styles';
import Table from '../../components/Table';
import { getComponent, mockStore } from '../../utils/test-utils';
import Search from './Search';
import { startSearching, stopSearching } from './types';

jest.mock('gatsby', () => ({
  navigate: jest.fn()
}));

describe('Search', () => {
  it('navigates to / if no wallet is set', () => {
    const store = mockStore({
      search: {
        derivedAddresses: [],
        isSearching: false
      }
    });

    getComponent(<Search />, store);

    expect(navigate).toHaveBeenCalledTimes(1);
    expect(navigate).toHaveBeenCalledWith('/');
  });

  it('dispatches startSearching when the button is pressed', () => {
    const store = mockStore({
      search: {
        derivedAddresses: [],
        isSearching: false,
        currentDerivationPath: DEFAULT_ETH,
        currentIndex: 5
      }
    });

    const component = getComponent(<Search />, store);
    const button = component.find('[data-test-id="toggle-search"]').at(0);
    button.simulate('click');

    expect(store.getActions()).toContainEqual(startSearching());
  });

  it('dispatches stopSearching when the button is pressed', () => {
    const store = mockStore({
      search: {
        derivedAddresses: [],
        isSearching: true,
        currentDerivationPath: DEFAULT_ETH,
        currentIndex: 5
      }
    });

    const component = getComponent(<Search />, store);
    const button = component.find('[data-test-id="toggle-search"]').at(0);
    button.simulate('click');

    expect(store.getActions()).toContainEqual(stopSearching());
  });

  it('shows the current derivation path', () => {
    const store = mockStore({
      search: {
        derivedAddresses: [],
        isSearching: true,
        currentDerivationPath: DEFAULT_ETH,
        currentIndex: 5
      }
    });

    const component = getComponent(<Search />, store);
    const content = component.find(CardContent);

    expect(content.text()).toContain(getFullPath(DEFAULT_ETH, 5));
  });

  it('shows a placeholder when no addresses are found yet', () => {
    const store = mockStore({
      search: {
        derivedAddresses: [],
        isSearching: true,
        currentDerivationPath: DEFAULT_ETH,
        currentIndex: 5
      }
    });

    const component = getComponent(<Search />, store);
    const table = component.find(Table);

    expect(table.text()).toContain('No addresses found yet');
  });

  it('shows the found addresses', () => {
    const store = mockStore({
      search: {
        derivedAddresses: [
          {
            address: '0xc6D5a3c98EC9073B54FA0969957Bd582e8D874bf',
            derivationPath: "m/44'/60'/0'/0/0"
          }
        ],
        isSearching: true,
        currentDerivationPath: DEFAULT_ETH,
        currentIndex: 5
      }
    });

    const component = getComponent(<Search />, store);
    const table = component.find(Table);

    expect(table.text()).toContain('0xc6D5a3c98EC9073B54FA0969957Bd582e8D874bf');
    expect(table.text()).toContain("m/44'/60'/0'/0/0");
  });
});
