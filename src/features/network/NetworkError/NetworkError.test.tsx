import Alert from '../../../components/Alert';
import { CloseIcon } from '../../../components/Alert/Alert.styles';
import { getComponent, mockStore } from '../../../utils/test-utils';
import { setNetworkError } from '../types';
import NetworkError from './NetworkError';

describe('NetworkError', () => {
  it('renders an alert if there is a network error', () => {
    const store = mockStore({
      network: {
        networkError: 'Foo'
      }
    });

    const component = getComponent(<NetworkError />, store);
    expect(component.find(Alert)).toHaveLength(1);
    expect(component.text()).toContain('Foo');
  });

  it('clears an error when the button is pressed', () => {
    const store = mockStore({
      network: {
        networkError: 'Foo'
      }
    });

    const component = getComponent(<NetworkError />, store);
    const button = component.find(CloseIcon);
    button.simulate('click');

    expect(store.getActions()).toContainEqual(setNetworkError(undefined));
  });
});
