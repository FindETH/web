import { getStyledComponent } from '../../utils/test-utils';
import Blockie from './Blockie';

describe('Blockie', () => {
  it('renders correctly', () => {
    const component = getStyledComponent(<Blockie address="0xDFDD854DaAD30E6E077AEf1c653169968c102E34" />);
    expect(component).toMatchSnapshot();
  });
});
