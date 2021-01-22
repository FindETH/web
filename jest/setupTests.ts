import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { configure } from 'enzyme';
import 'jest-styled-components';
import { HelmetProvider } from 'react-helmet-async';

configure({ adapter: new Adapter() });

HelmetProvider.canUseDOM = false;

global.___loader = {
  enqueue: jest.fn()
};
