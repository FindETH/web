import { shallow } from 'enzyme';
import React from 'react';
import SearchOptions from './SearchOptions';

describe('SearchOptions', () => {
  it('renders', () => {
    expect(shallow(<SearchOptions state={{}} onReset={jest.fn()} onNext={jest.fn()} />)).toMatchSnapshot();
  });
});
