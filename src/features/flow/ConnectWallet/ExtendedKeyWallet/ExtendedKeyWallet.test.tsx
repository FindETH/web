import { ExtendedKey } from '@findeth/wallets';
import Button from '../../../../components/Button';
import { getComponent } from '../../../../utils/test-utils';
import ExtendedKeyWallet from './ExtendedKeyWallet';

const EXTENDED_KEY =
  'xpub6DreGKvTo5gf1tXu5N86sz922cFfACvEj8oUrL1nJAbngaMriFQDYk3vA1vpXXGyD5MtH2tbQ8JJScFki5TNSJtRF9T2Qq6ZNLSDhRk2bqc';

describe('ExtendedKeyWallet', () => {
  it('validates the extended key', () => {
    const fn = jest.fn();
    const component = getComponent(<ExtendedKeyWallet onNext={fn} />);

    const input = component.find('input[name="extendedKey"]');
    input.simulate('change', { target: { name: 'extendedKey', value: 'foo bar' } });

    const button = component.find(Button);
    button.simulate('click');

    expect(fn).not.toHaveBeenCalled();
  });

  it('calls onNext with an instance of the ExtendedKey class', () => {
    const fn = jest.fn();
    const component = getComponent(<ExtendedKeyWallet onNext={fn} />);

    const mnemonicInput = component.find('input[name="extendedKey"]');
    mnemonicInput.simulate('change', { target: { name: 'extendedKey', value: EXTENDED_KEY } });

    const button = component.find(Button);
    button.simulate('click');

    expect(fn).toHaveBeenCalledTimes(1);
    expect(fn.mock.calls[0][0]).toBeInstanceOf(ExtendedKey);

    const instance = fn.mock.calls[0][0];
    expect(instance.extendedKey).toBe(EXTENDED_KEY);
  });
});
