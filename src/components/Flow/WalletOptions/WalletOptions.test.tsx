import { shallow } from 'enzyme';
import React from 'react';
import WalletOptions from './WalletOptions';

describe('WalletOptions', () => {
  it('renders', () => {
    expect(shallow(<WalletOptions state={{}} onReset={jest.fn()} onNext={jest.fn()} />)).toMatchSnapshot();
  });
});
