import { getComponent, mockStore } from '../../../utils/test-utils';
import NavigationItem from './NavigationItem';

describe('NavigationItem', () => {
  it('renders correctly', () => {
    const store = mockStore({
      flow: {
        isFlow: true
      }
    });

    const component = getComponent(<NavigationItem title="Foo" to="/foo" />, store);
    expect(component).toMatchSnapshot();
  });
});
