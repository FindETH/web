import Button from '../../../components/Button';
import { getComponent, mockStore } from '../../../utils/test-utils';
import { addAddress, resolveAddress } from '../../search';
import Address from './Address';

describe('Address', () => {
  it('adds an address to the store if it is valid', () => {
    const store = mockStore({
      search: {
        addresses: []
      }
    });

    const component = getComponent(<Address onReset={jest.fn} onNext={jest.fn} />, store);
    const input = component.find('input[name="address"]');
    input.simulate('change', { target: { name: 'address', value: '0x4bbeEB066eD09B7AEd07bF39EEe0460DFa261520' } });

    const button = component.find(Button).at(0);
    button.simulate('click');

    expect(store.getActions()).toContainEqual(addAddress('0x4bbeEB066eD09B7AEd07bF39EEe0460DFa261520'));
  });

  it('dispatches resolveAddress if the address is an ENS name', () => {
    const store = mockStore({
      search: {
        addresses: []
      }
    });

    const component = getComponent(<Address onReset={jest.fn} onNext={jest.fn} />, store);
    const input = component.find('input[name="address"]');
    input.simulate('change', { target: { name: 'address', value: 'foo.eth' } });

    const button = component.find(Button).at(0);
    button.simulate('click');

    expect(store.getActions()).toContainEqual(resolveAddress('foo.eth'));
  });

  it('does not add invalid addresses', () => {
    const store = mockStore({
      search: {
        addresses: []
      }
    });

    const component = getComponent(<Address onReset={jest.fn} onNext={jest.fn} />, store);
    const input = component.find('input[name="address"]');
    input.simulate('change', { target: { name: 'address', value: 'foo bar' } });

    const button = component.find(Button).at(0);
    button.simulate('click');

    expect(store.getActions()).not.toContainEqual(addAddress('foo bar'));
  });

  it('does not add duplicate addresses', () => {
    const store = mockStore({
      search: {
        addresses: [
          {
            address: '0x4bbeEB066eD09B7AEd07bF39EEe0460DFa261520'
          }
        ]
      }
    });

    const component = getComponent(<Address onReset={jest.fn} onNext={jest.fn} />, store);
    const input = component.find('input[name="address"]');
    input.simulate('change', { target: { name: 'address', value: 'foo bar' } });

    const button = component.find(Button).at(0);
    button.simulate('click');

    expect(store.getActions()).not.toContainEqual(addAddress('0x4bbeEB066eD09B7AEd07bF39EEe0460DFa261520'));
  });

  it('calls onNext if there is at least one address', () => {
    const store = mockStore({
      search: {
        addresses: [
          {
            address: '0x4bbeEB066eD09B7AEd07bF39EEe0460DFa261520'
          }
        ]
      }
    });

    const fn = jest.fn();
    const component = getComponent(<Address onReset={jest.fn} onNext={fn} />, store);
    const button = component.find('[data-test-id="submit"]').at(0);
    button.simulate('click');

    expect(fn).toHaveBeenCalledTimes(1);
  });

  it('does not call onNext when there are no addresses', () => {
    const store = mockStore({
      search: {
        addresses: []
      }
    });

    const fn = jest.fn();
    const component = getComponent(<Address onReset={jest.fn} onNext={fn} />, store);
    const button = component.find('[data-test-id="submit"]').at(0);
    button.simulate('click');

    expect(fn).not.toHaveBeenCalled();
  });
});
