import { getStyledComponent } from '../../../../utils/test-utils';
import MadeBy from './MadeBy';

describe('MadeBy', () => {
  it('renders correctly', () => {
    const component = getStyledComponent(<MadeBy />);
    expect(component).toMatchSnapshot();
  });
});
