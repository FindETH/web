import { getStyledComponent } from '../../utils/test-utils';
import Input from './Input';

describe('Input', () => {
  it('renders correctly', () => {
    const component = getStyledComponent(<Input />);
    expect(component).toMatchSnapshot();

    component.setProps({ hasError: true });
    expect(component).toMatchSnapshot();
  });
});
