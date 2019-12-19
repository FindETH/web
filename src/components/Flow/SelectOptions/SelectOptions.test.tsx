import { shallow } from 'enzyme';
import React from 'react';
import SelectOptions from './SelectOptions';

describe('SelectOptions', () => {
  it('renders', () => {
    expect(shallow(<SelectOptions state={{}} onReset={jest.fn()} onNext={jest.fn()} />)).toMatchSnapshot();
  });
});
