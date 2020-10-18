import { MnemonicPhrase } from '@findeth/wallets';
import Button from '../../../../components/Button';
import { getComponent } from '../../../../utils/test-utils';
import MnemonicWallet from './MnemonicWallet';

const MNEMONIC_PHRASE = 'test test test test test test test test test test test ball';

describe('MnemonicWallet', () => {
  it('validates the mnemonic phrase', () => {
    const fn = jest.fn();
    const component = getComponent(<MnemonicWallet onNext={fn} />);

    const input = component.find('input[name="mnemonic"]');
    input.simulate('change', { target: { name: 'mnemonic', value: 'foo bar' } });

    const button = component.find(Button);
    button.simulate('click');

    expect(fn).not.toHaveBeenCalled();
  });

  it('calls onNext with an instance of the MnemonicPhrase class', () => {
    const fn = jest.fn();
    const component = getComponent(<MnemonicWallet onNext={fn} />);

    const mnemonicInput = component.find('input[name="mnemonic"]');
    mnemonicInput.simulate('change', { target: { name: 'mnemonic', value: MNEMONIC_PHRASE } });

    const passphraseInput = component.find('input[name="passphrase"]');
    passphraseInput.simulate('change', { target: { name: 'passphrase', value: 'foo bar' } });

    const button = component.find(Button);
    button.simulate('click');

    expect(fn).toHaveBeenCalledTimes(1);
    expect(fn.mock.calls[0][0]).toBeInstanceOf(MnemonicPhrase);

    const instance = fn.mock.calls[0][0];
    expect(instance.mnemonicPhrase).toBe(MNEMONIC_PHRASE);
    expect(instance.passphrase).toBe('foo bar');
  });
});
