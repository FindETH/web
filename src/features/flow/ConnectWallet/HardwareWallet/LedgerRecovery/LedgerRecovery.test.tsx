import { getStyledComponent } from '../../../../../utils/test-utils';
import LedgerRecovery from './LedgerRecovery';

describe('LedgerRecovery', () => {
  it('renders correctly', () => {
    const component = getStyledComponent(<LedgerRecovery />);
    expect(component).toMatchSnapshot();
  });
});
