import { getStyledComponent } from '../../../utils/test-utils';
import Links from './Links';

describe('Links', () => {
  it('renders correctly', () => {
    const component = getStyledComponent(<Links />);
    expect(component).toMatchSnapshot();
  });
});
