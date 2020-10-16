import { shallow } from 'enzyme';
import List from './List';

describe('List', () => {
  it('renders', () => {
    expect(shallow(<List />)).toMatchSnapshot();
  });
});
