import { getStyledComponent } from '../../../utils/test-utils';
import NotLocal from './NotLocal';

describe('Not', () => {
  it('renders correctly', () => {
    const component = getStyledComponent(<NotLocal />);
    expect(component).toMatchSnapshot();
  });
});
