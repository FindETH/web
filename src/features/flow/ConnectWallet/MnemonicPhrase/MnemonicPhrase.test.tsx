import React from 'react';
import Button from '../../../../components/ui/Button';
import { getComponent } from '../../../../utils/test-utils';
import MnemonicPhrase from './MnemonicPhrase';

describe('MnemonicPhrase', () => {
  it('calls onNext when the button is pressed', () => {
    const fn = jest.fn();
    const component = getComponent(<MnemonicPhrase onNext={fn} />);

    const button = component.find(Button);
    button.simulate('click');

    expect(fn).toHaveBeenCalledTimes(1);
  });
});
