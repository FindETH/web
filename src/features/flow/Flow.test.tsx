import createMockStore from 'redux-mock-store';
import { setFlow } from '../../store/derivation';
import { getComponent } from '../../utils/test-utils';
import Flow from './Flow';
import { FirstComponent, SecondComponent } from './__fixtures__/components';

const mockStore = createMockStore();

describe('Flow', () => {
  it('passes a onNext and onReset callback function to the components', () => {
    const store = mockStore();
    const component = getComponent(<Flow components={[FirstComponent, SecondComponent]} onDone={jest.fn} />, store);
    const first = component.find(FirstComponent);

    expect(first.prop('onNext')).toBeDefined();
    expect(first.prop('onReset')).toBeDefined();
  });

  it('renders the current step in the flow', () => {
    const store = mockStore();
    const component = getComponent(<Flow components={[FirstComponent, SecondComponent]} onDone={jest.fn} />, store);

    expect(component.find(FirstComponent)).toBeDefined();
  });

  it('renders the next component when onNext is called', () => {
    const store = mockStore();
    const component = getComponent(<Flow components={[FirstComponent, SecondComponent]} onDone={jest.fn} />, store);
    component.find('#next-button').simulate('click');

    expect(component.find(SecondComponent)).toBeDefined();
  });

  it('calls onDone when all steps are done', () => {
    const store = mockStore();
    const fn = jest.fn();
    const component = getComponent(<Flow components={[FirstComponent, SecondComponent]} onDone={fn} />, store);
    component.find('#next-button').simulate('click');
    component.find('#next-button').simulate('click');

    expect(fn).toHaveBeenCalledTimes(1);
  });

  it('goes back to the first step when onReset is called', () => {
    const store = mockStore();
    const component = getComponent(<Flow components={[FirstComponent, SecondComponent]} onDone={jest.fn} />, store);
    component.find('#next-button').simulate('click');
    component.find('#reset-button').simulate('click');

    expect(component.find(FirstComponent)).toBeDefined();
  });

  it('updates the flow state in the store', () => {
    const store = mockStore();
    const component = getComponent(<Flow components={[FirstComponent]} onDone={jest.fn} />, store);
    component.find('#next-button').simulate('click');

    expect(store.getActions()).toContainEqual(setFlow(true));
    expect(store.getActions()).toContainEqual(setFlow(false));
  });
});
