import { getStyledComponent } from '../../utils/test-utils';
import Alert from './Alert';

describe('Alert', () => {
  it('renders correctly', () => {
    const component = getStyledComponent(<Alert />);
    expect(component).toMatchSnapshot();
  });
});
