import { getStyledComponent } from '../../utils/test-utils';
import Card from './Card';
import { CardContent, CardHeader } from './Card.styles';

describe('Card', () => {
  it('renders correctly', () => {
    const component = getStyledComponent(
      <Card>
        <CardHeader>Foo bar</CardHeader>
        <CardContent>Baz qux</CardContent>
      </Card>
    );
    expect(component).toMatchSnapshot();
  });
});
