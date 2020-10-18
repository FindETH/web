import { getComponent, mockStore } from '../../../utils/test-utils';
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
});
