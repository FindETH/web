import { getStyledComponent } from '../../../../utils/test-utils';
import Donate from './Donate';

describe('Donate', () => {
  it('renders correctly', () => {
    const component = getStyledComponent(<Donate />);
    expect(component).toMatchSnapshot();
  });
});
