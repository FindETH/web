import { getStyledComponent } from '../../utils/test-utils';
import Button from './Button';

describe('Button', () => {
  it('renders correctly', () => {
    const component = getStyledComponent(<Button />);
    expect(component).toMatchSnapshot();
  });
});
