import { getComponent } from '../../utils/test-utils';
import Dropdown from './Dropdown';

describe('Dropdown', () => {
  it('renders a dropdown menu with options', () => {
    const component = getComponent(<Dropdown value="Foo" items={['Foo', 'Bar']} onChange={jest.fn()} />);
    const option = component.find('option');

    expect(option).toHaveLength(2);
    expect(option.at(0).text()).toContain('Foo');
    expect(option.at(1).text()).toContain('Bar');
  });

  it('calls onChange when an option is selected', () => {
    const fn = jest.fn();
    const component = getComponent(<Dropdown value="Foo" items={['Foo', 'Bar']} onChange={fn} />);
    component.simulate('change', { target: { value: 'Bar' } });

    expect(fn).toHaveBeenCalledTimes(1);
    expect(fn).toHaveBeenCalledWith('Bar');
  });
});
