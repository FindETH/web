import { getComponent, mockStore } from '../../../utils/test-utils';
import NoConnection from '../NoConnection';
import CheckConnection from './CheckConnection';

describe('CheckConnection', () => {
  it('renders the children when isOnline and isConnected is true', () => {
    const store = mockStore({
      network: {
        isOnline: true,
        isConnected: true
      }
    });

    const component = getComponent(<CheckConnection>Foo bar</CheckConnection>, store);
    expect(component.text()).toContain('Foo bar');
  });

  it('renders a message when isOnline or isConnected is false', () => {
    const store = mockStore({
      network: {
        isOnline: false,
        isConnected: false
      }
    });

    const component = getComponent(<CheckConnection>Foo bar</CheckConnection>, store);
    expect(component.text()).not.toContain('Foo bar');
    expect(component.find(NoConnection)).toHaveLength(1);
  });
});
