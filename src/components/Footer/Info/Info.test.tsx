import { getStyledComponent } from '../../../utils/test-utils';
import Info from './Info';

describe('Info', () => {
  it('renders correctly', () => {
    const component = getStyledComponent(<Info />);
    expect(component).toMatchSnapshot();
  });
});
