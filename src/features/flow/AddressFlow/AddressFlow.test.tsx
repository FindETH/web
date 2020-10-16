import createMockStore from 'redux-mock-store';
import { getComponent } from '../../../utils/test-utils';
import Flow from '../Flow';
import AddressFlow from './AddressFlow';

describe('AddressFlow', () => {
  const mockStore = createMockStore();

  it('renders a flow', () => {
    const store = mockStore({});

    const component = getComponent(<AddressFlow />, store);
    expect(component.find(Flow)).toHaveLength(1);
  });
});
