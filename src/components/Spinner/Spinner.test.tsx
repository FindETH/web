import { getStyledComponent } from '../../utils/test-utils';
import Spinner from './Spinner';

describe('Spinner', () => {
  it('renders correctly', () => {
    const component = getStyledComponent(<Spinner />);
    expect(component).toMatchSnapshot();
  });
});
