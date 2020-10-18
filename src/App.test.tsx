import { shallow } from 'enzyme';
import { App } from './App';

describe('App', () => {
  it('renders correctly', () => {
    const component = shallow(<App />);
    expect(component).toMatchSnapshot();
  });
});
