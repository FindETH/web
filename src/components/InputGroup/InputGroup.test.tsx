import { getStyledComponent } from '../../utils/test-utils';
import InputGroup from './InputGroup';

describe('InputGroup', () => {
  it('renders correctly', () => {
    const component = getStyledComponent(<InputGroup />);
    expect(component).toMatchSnapshot();
  });
});
