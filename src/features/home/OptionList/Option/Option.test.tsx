import { navigate } from 'gatsby';
import { SearchType } from '../../../../types/search';
import { getComponent } from '../../../../utils/test-utils';
import Option from './Option';

jest.mock('gatsby', () => ({
  navigate: jest.fn()
}));

describe('Option', () => {
  it('navigates to the specified type when clicked', () => {
    const component = getComponent(<Option icon="arrow" title="Foo" description="Bar" type={SearchType.ADDRESS} />);
    component.simulate('click');

    expect(navigate).toHaveBeenCalledTimes(1);
    expect(navigate).toHaveBeenCalledWith(`/flow/${SearchType.ADDRESS}`);

    component.setProps({ type: SearchType.ASSETS });
    component.simulate('click');

    expect(navigate).toHaveBeenCalledTimes(2);
    expect(navigate).toHaveBeenCalledWith(`/flow/${SearchType.ASSETS}`);
  });
});
