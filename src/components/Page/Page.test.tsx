import { getComponent } from '../../utils/test-utils';
import Page from './Page';

describe('Page', () => {
  it('renders correctly', () => {
    const component = getComponent(<Page title="Foo" />);
    expect(component).toMatchSnapshot();
  });
});
