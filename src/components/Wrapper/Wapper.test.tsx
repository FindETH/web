import { getStyledComponent } from '../../utils/test-utils';
import Wrapper from './Wrapper';

describe('Wrapper', () => {
  it('renders correctly', () => {
    const component = getStyledComponent(<Wrapper>Foo</Wrapper>);
    expect(component).toMatchSnapshot();
  });
});
