import { shallow } from 'enzyme';
import React from 'react';
import SelectNetwork from './SelectNetwork';

describe('SelectOptions', () => {
  it('renders', () => {
    expect(shallow(<SelectNetwork state={{}} onReset={jest.fn()} onNext={jest.fn()} />)).toMatchSnapshot();
  });
});
