import { shallow } from 'enzyme';
import PanelItem from './PanelItem';

describe('PanelItem', () => {
  it('renders', () => {
    expect(shallow(<PanelItem title="Foo" description="Bar" icon="Baz" />)).toMatchSnapshot();
    expect(shallow(<PanelItem title="Foo" description="Bar" icon="Baz" highlight={true} />)).toMatchSnapshot();
  });
});
