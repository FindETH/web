import { getStyledComponent } from '../../utils/test-utils';
import Questions from './Questions';

describe('Questions', () => {
  it('renders correctly', () => {
    const component = getStyledComponent(<Questions />);
    expect(component).toMatchSnapshot();
  });
});
