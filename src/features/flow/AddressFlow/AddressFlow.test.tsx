import { SearchType } from '../../../types/search';
import { getComponent, mockStore } from '../../../utils/test-utils';
import { setType } from '../../search';
import Flow from '../Flow';
import AddressFlow from './AddressFlow';

describe('AddressFlow', () => {
  it('renders a flow', () => {
    const store = mockStore({
      flow: {
        isFlow: true
      },
      search: {
        addresses: []
      }
    });

    const component = getComponent(<AddressFlow />, store);
    expect(component.find(Flow)).toHaveLength(1);
  });

  it('sets the search type to address', () => {
    const store = mockStore({
      flow: {
        isFlow: true
      },
      search: {
        addresses: []
      }
    });

    getComponent(<AddressFlow />, store);

    expect(store.getActions()).toContainEqual(setType(SearchType.ADDRESS));
  });
});
