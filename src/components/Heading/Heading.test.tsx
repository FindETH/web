import { getStyledComponent } from '../../utils/test-utils';
import Heading from './Heading';

describe('Heading', () => {
  it('renders correctly', () => {
    const component = getStyledComponent(<Heading as="h1" />);
    expect(component).toMatchSnapshot();

    component.setProps({ as: 'h2' });
    expect(component).toMatchSnapshot();

    component.setProps({ as: 'h3' });
    expect(component).toMatchSnapshot();
  });
});
