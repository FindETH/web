import { getStyledComponent } from '../../../utils/test-utils';
import Socials from './Socials';

describe('Socials', () => {
  it('renders correctly', () => {
    const component = getStyledComponent(<Socials />);
    expect(component).toMatchSnapshot();
  });
});
