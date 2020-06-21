import { shallow } from 'enzyme';
import React from 'react';
import SelectNetwork from './SelectNetwork';

describe('SelectNetwork', () => {
  it('renders', () => {
    expect(shallow(<SelectNetwork state={{}} onReset={jest.fn()} onNext={jest.fn()} />)).toMatchSnapshot();
  });
});
