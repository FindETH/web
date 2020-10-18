import { getStyledComponent } from '../../utils/test-utils';
import Field from './Field';

describe('Field', () => {
  it('renders correctly', () => {
    const component = getStyledComponent(<Field label="Foo bar">Baz qux</Field>);
    expect(component).toMatchSnapshot();
  });
});
