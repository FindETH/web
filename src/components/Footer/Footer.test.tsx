import { getStyledComponent } from '../../utils/test-utils';
import Footer from './Footer';

describe('Footer', () => {
  it('renders correctly', () => {
    const component = getStyledComponent(<Footer />);
    expect(component).toMatchSnapshot();
  });
});
