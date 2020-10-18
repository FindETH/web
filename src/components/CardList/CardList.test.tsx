import { getStyledComponent } from '../../utils/test-utils';
import CardList from './CardList';

describe('CardList', () => {
  it('renders correctly', () => {
    const component = getStyledComponent(<CardList />);
    expect(component).toMatchSnapshot();
  });
});
