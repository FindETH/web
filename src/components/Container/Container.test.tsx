import { getStyledComponent } from '../../utils/test-utils';
import Container from './Container';

describe('Container', () => {
  it('renders correctly', () => {
    const component = getStyledComponent(<Container>Foo bar</Container>);
    expect(component).toMatchSnapshot();
  });
});
