import { getComponent, mockStore } from '../../utils/test-utils';
import Navigation from './Navigation';

describe('Navigation', () => {
  it('renders correctly', () => {
    const store = mockStore({
      flow: {
        isFlow: true
      }
    });

    const component = getComponent(<Navigation />, store);
    expect(component).toMatchSnapshot();
  });
});
