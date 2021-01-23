import { getComponent, mockStore } from '../../../../utils/test-utils';
import AddressItem from './AddressItem';
import AddressList from './AddressList';

describe('AddressList', () => {
  it('renders an AddressItem for each address', () => {
    const store = mockStore({
      search: {
        addresses: [
          { address: '0xDFDD854DaAD30E6E077AEf1c653169968c102E34' },
          { address: '0x4bbeEB066eD09B7AEd07bF39EEe0460DFa261520' }
        ]
      }
    });

    const component = getComponent(<AddressList />, store);
    const items = component.find(AddressItem);

    expect(items).toHaveLength(2);
    expect(items.at(0).text()).toContain('0xDFDD854DaAD30E6E077AEf1c653169968c102E34');
    expect(items.at(1).text()).toContain('0x4bbeEB066eD09B7AEd07bF39EEe0460DFa261520');
  });

  it('renders a placeholder when there are no addresses', () => {
    const store = mockStore({
      search: {
        addresses: []
      }
    });

    const component = getComponent(<AddressList />, store);
    expect(component.text()).toContain('Enter an address above...');
  });
});
