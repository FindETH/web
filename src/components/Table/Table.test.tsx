import { getStyledComponent } from '../../utils/test-utils';
import Table from './Table';

describe('Table', () => {
  it('renders correctly', () => {
    const component = getStyledComponent(<Table columns={['Foo', 'Bar']} />);
    expect(component).toMatchSnapshot();
  });
});
