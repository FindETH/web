import { getComponent } from '../../utils/test-utils';
import { helmetContext } from '../Providers/TestProviders';
import Meta from './Meta';

describe('Meta', () => {
  it('sets a default title', () => {
    getComponent(<Meta />);
    expect(helmetContext.helmet.title.toString()).toContain('FindETH');
  });

  it('sets a custom title', () => {
    getComponent(<Meta title="Foo bar" />);
    expect(helmetContext.helmet.title.toString()).toContain('Foo bar - FindETH');
  });
});
