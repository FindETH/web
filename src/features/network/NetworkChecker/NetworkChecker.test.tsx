import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { Store } from 'redux';
import createMockStore from 'redux-mock-store';
import { setOnline } from '../index';
import NetworkChecker from './NetworkChecker';

const getComponent = (store: Store) => {
  return mount(<NetworkChecker />, {
    wrappingComponent: Provider,
    wrappingComponentProps: {
      store
    }
  });
};

describe('NetworkChecker', () => {
  const mockStore = createMockStore();

  it('dispatches setOnline with true if the browser is online', () => {
    jest.spyOn(navigator, 'onLine', 'get').mockReturnValueOnce(true).mockReturnValueOnce(false);

    const store = mockStore({});
    const component = getComponent(store);

    expect(store.getActions()).toContainEqual(setOnline(true));

    component.unmount();
    component.mount();

    expect(store.getActions()).toContainEqual(setOnline(false));
  });

  it('dispatches setOnline when an online or offline event is called', () => {
    const events: Record<string, () => void> = {};
    window.addEventListener = jest.fn().mockImplementation((event, callback) => {
      events[event] = callback;
    });

    const store = mockStore({});
    getComponent(store);

    expect(events).toHaveProperty('online');
    expect(events).toHaveProperty('offline');

    events.online();
    events.offline();

    expect(store.getActions()).toContainEqual(setOnline(true));
    expect(store.getActions()).toContainEqual(setOnline(false));
  });
});
