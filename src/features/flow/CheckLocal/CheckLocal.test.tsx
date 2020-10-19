import { getComponent } from '../../../utils/test-utils';
import NotLocal from '../Local';
import CheckLocal from './CheckLocal';

describe('CheckLocal', () => {
  it('renders the children when running locally', () => {
    const component = getComponent(<CheckLocal isLocal={true}>Foo</CheckLocal>);
    expect(component.text()).toContain('Foo');
  });

  it('renders a message when not running locally', () => {
    const component = getComponent(<CheckLocal isLocal={false}>Foo</CheckLocal>);
    expect(component.text()).not.toContain('Foo');
    expect(component.find(NotLocal)).toHaveLength(1);
  });
});
