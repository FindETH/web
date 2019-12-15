import { shallow } from 'enzyme';
import React from 'react';
import Trezor from './Trezor';

describe('Trezor', () => {
  it('renders', () => {
    expect(shallow(<Trezor onSelect={jest.fn()} />)).toMatchSnapshot();
  });
});
