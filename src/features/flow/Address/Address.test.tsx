import React from 'react';
import createMockStore from 'redux-mock-store';
import Button from '../../../components/ui/Button';
import { setAddress } from '../../../store/derivation';
import { getComponent } from '../../../utils/test-utils';
import Address from './Address';

describe('Address', () => {
  const mockStore = createMockStore();

  it('calls onNext if an address is valid', () => {
    const store = mockStore();

    const fn = jest.fn();
    const component = getComponent(<Address onReset={jest.fn} onNext={fn} />, store);
    const input = component.find('input[name="address"]');
    input.simulate('change', { target: { name: 'address', value: '0x4bbeEB066eD09B7AEd07bF39EEe0460DFa261520' } });

    const button = component.find(Button);
    button.simulate('click');

    expect(store.getActions()).toContainEqual(setAddress('0x4bbeEB066eD09B7AEd07bF39EEe0460DFa261520'));
    expect(fn).toHaveBeenCalledTimes(1);
  });

  it('checks if an address is valid', () => {
    const store = mockStore();

    const fn = jest.fn();
    const component = getComponent(<Address onReset={jest.fn} onNext={fn} />, store);
    const input = component.find('input[name="address"]');
    input.simulate('change', { target: { name: 'address', value: 'foo bar' } });

    const button = component.find(Button);
    button.simulate('click');

    expect(store.getActions()).not.toContainEqual(setAddress('foo bar'));
    expect(fn).toHaveBeenCalledTimes(0);
  });
});
