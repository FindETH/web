import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { configure } from 'enzyme';
import 'jest-styled-components';
import { HelmetProvider } from 'react-helmet-async';

configure({ adapter: new Adapter() });

HelmetProvider.canUseDOM = false;

// @ts-expect-error `___loader` does not exist on type of `global`
global.___loader = {
  enqueue: jest.fn()
};
