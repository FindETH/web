import Button from '../../../../components/Button';
import { getComponent } from '../../../../utils/test-utils';
import MnemonicWallet from './MnemonicWallet';

describe('MnemonicWallet', () => {
  it('calls onNext when the button is pressed', () => {
    const fn = jest.fn();
    const component = getComponent(<MnemonicWallet onNext={fn} />);

    const button = component.find(Button);
    button.simulate('click');

    expect(fn).toHaveBeenCalledTimes(1);
  });
});
