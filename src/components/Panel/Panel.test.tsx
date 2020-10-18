import { getStyledComponent } from '../../utils/test-utils';
import Panel from './Panel';

describe('Panel', () => {
  it('renders correctly', () => {
    const component = getStyledComponent(<Panel />);
    expect(component).toMatchSnapshot();
  });
});
