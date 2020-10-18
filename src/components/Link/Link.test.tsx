import { getComponent } from '../../utils/test-utils';
import Link from './Link';
import { ExternalLink, RouterLink } from './Link.styles';

describe('Link', () => {
  it('renders an internal link', () => {
    const component = getComponent(<Link to="/" />);
    const link = component.find(RouterLink);

    expect(link).toHaveLength(1);
    expect(link.prop('to')).toBe('/');
  });

  it('renders an external link when specified', () => {
    const component = getComponent(<Link to="/" external={true} />);
    const link = component.find(ExternalLink);

    expect(link).toHaveLength(1);
    expect(link.prop('href')).toBe('/');
  });
});
