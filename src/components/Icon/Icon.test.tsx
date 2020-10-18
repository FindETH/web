import { mount } from 'enzyme';
import Icon from './Icon';

describe('Icon', () => {
  it('renders an image with alt', () => {
    const component = mount(<Icon icon="wallet" />);
    const image = component.find('img');

    expect(image).toHaveLength(1);
    expect(image.prop('alt')).toBe('Wallet');
  });

  it('uses a custom title if specified', () => {
    const component = mount(<Icon icon="wallet" name="Foo" />);
    const image = component.find('img');

    expect(image).toHaveLength(1);
    expect(image.prop('alt')).toBe('Foo');
  });
});
