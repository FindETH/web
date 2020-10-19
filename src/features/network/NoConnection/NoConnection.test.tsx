import { getStyledComponent } from '../../../utils/test-utils';
import NoConnection from './NoConnection';

describe('NoConnection', () => {
  it('renders correctly', () => {
    const component = getStyledComponent(<NoConnection />);
    expect(component).toMatchSnapshot();
  });
});
