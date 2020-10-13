import { mount } from 'enzyme';
import React from 'react';
import { Provider } from 'react-redux';
import { Store } from 'redux';
import createMockStore from 'redux-mock-store';
import { checkNetwork, setOnline } from '../../store/network';
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

  it('dispatches checkNetwork if the browser is online', () => {
    jest
      .spyOn(navigator, 'onLine', 'get')
      .mockReturnValueOnce(true)
      .mockReturnValueOnce(false);

    const store = mockStore({});
    const component = getComponent(store);

    expect(store.getActions()).toContainEqual(checkNetwork());

    component.unmount();
    component.mount();

    expect(store.getActions()).toContainEqual(setOnline(false));
  });

  it('dispatches setOffline if the browser connection is lost', () => {
    const events: Record<string, () => void> = {};
    window.addEventListener = jest.fn().mockImplementation((event, callback) => {
      events[event] = callback;
    });

    const store = mockStore({});
    getComponent(store);

    expect(events).toHaveProperty('online');
    expect(events).toHaveProperty('offline');

    events.offline();
    events.offline();

    expect(store.getActions()).toContainEqual(setOnline(false));
    expect(store.getActions()).toContainEqual(checkNetwork());
  });
});
