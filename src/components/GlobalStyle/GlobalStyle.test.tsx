import { getStyledComponent } from '../../utils/test-utils';
import GlobalStyle from './GlobalStyle';

describe('GlobalStyle', () => {
  it('renders correctly', () => {
    const component = getStyledComponent(<GlobalStyle />);
    expect(component).toMatchSnapshot();
  });
});
