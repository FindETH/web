import { getStyledComponent } from '../../utils/test-utils';
import Typography from './Typography';

describe('Typography', () => {
  it('renders correctly', () => {
    const component = getStyledComponent(<Typography>Foo</Typography>);
    expect(component).toMatchSnapshot();
  });
});
