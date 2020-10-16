import { shallow } from 'enzyme';
import PanelItemLink from './PanelItemLink';

describe('PanelItemLink', () => {
  it('renders', () => {
    expect(shallow(<PanelItemLink to="/" title="Foo" description="Bar" icon="Baz" />)).toMatchSnapshot();
    expect(
      shallow(<PanelItemLink to="/" title="Foo" description="Bar" icon="Baz" highlight={true} />)
    ).toMatchSnapshot();
  });
});
