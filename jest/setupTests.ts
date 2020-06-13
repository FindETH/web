import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-styled-components';
import { HelmetProvider } from 'react-helmet-async';

configure({ adapter: new Adapter() });

HelmetProvider.canUseDOM = false;
