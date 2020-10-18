import { getStyledComponent } from '../../utils/test-utils';
import Providers from './Providers';

describe('Providers', () => {
  it('renders correctly', () => {
    const component = getStyledComponent(<Providers />);
    expect(component).toMatchSnapshot();
  });
});
