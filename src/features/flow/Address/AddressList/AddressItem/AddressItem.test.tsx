import { getComponent, mockStore } from '../../../../../utils/test-utils';
import { removeAddress } from '../../../../search';
import AddressItem from './AddressItem';
import { RemoveIcon } from './AddressItem.styles';

describe('AddressItem', () => {
  it('removes an item from the store', () => {
    const store = mockStore({
      search: {
        addresses: []
      }
    });

    const component = getComponent(
      <table>
        <tbody>
          <AddressItem address="0xDFDD854DaAD30E6E077AEf1c653169968c102E34" />
        </tbody>
      </table>,
      store
    );
    const button = component.find(RemoveIcon);
    button.simulate('click');

    expect(store.getActions()).toContainEqual(removeAddress('0xDFDD854DaAD30E6E077AEf1c653169968c102E34'));
  });
});
