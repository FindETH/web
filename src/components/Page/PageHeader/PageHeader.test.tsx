import { getStyledComponent } from '../../../utils/test-utils';
import PageHeader from './PageHeader';

describe('PageHeader', () => {
  it('renders correctly', () => {
    const component = getStyledComponent(<PageHeader />);
    expect(component).toMatchSnapshot();
  });
});
