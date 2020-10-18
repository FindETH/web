import { getComponent, mockStore } from '../../utils/test-utils';
import Header from './Header';

describe('Header', () => {
  it('renders correctly', () => {
    const store = mockStore({
      flow: {
        isFlow: false
      }
    });

    const component = getComponent(<Header />, store);
    expect(component).toMatchSnapshot();
  });
});
