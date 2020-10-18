import { getComponent } from '../../../utils/test-utils';
import CardListItem from './CardListItem';
import { CardIcon } from './CardListItem.styles';

describe('CardListItem', () => {
  it('forwards the onClick prop', () => {
    const fn = jest.fn();
    const component = getComponent(<CardListItem onClick={fn} />);
    component.simulate('click');

    expect(fn).toHaveBeenCalledTimes(1);
  });

  it('renders an icon if specified', () => {
    const component = getComponent(<CardListItem icon="wallet" onClick={jest.fn()} />);
    const icon = component.find(CardIcon);

    expect(icon).toHaveLength(1);
    expect(icon.prop('icon')).toBe('wallet');
  });

  it('renders the children', () => {
    const component = getComponent(<CardListItem onClick={jest.fn()}>Foo bar</CardListItem>);

    expect(component.text()).toContain('Foo bar');
  });
});
