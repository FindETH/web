import { createStore } from '../../../store';
import { getStyledComponent } from '../../../utils/test-utils';
import TestProviders from './TestProviders';

describe('TestProviders', () => {
  it('renders correctly', () => {
    const store = createStore();
    const component = getStyledComponent(<TestProviders store={store} />);
    expect(component).toMatchSnapshot();
  });
});
