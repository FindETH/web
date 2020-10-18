import { getStyledComponent } from '../../utils/test-utils';
import Logo from './Logo';

describe('Logo', () => {
  it('renders correctly', () => {
    const component = getStyledComponent(<Logo />);
    expect(component).toMatchSnapshot();
  });
});
