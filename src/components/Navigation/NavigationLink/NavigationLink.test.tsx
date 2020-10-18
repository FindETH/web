import { getComponent, mockStore } from '../../../utils/test-utils';
import NavigationLink from './NavigationLink';

const mockShowModal = jest.fn();
const mockHideModal = jest.fn();

jest.mock('react-modal-hook', () => ({
  ModalProvider: jest.fn().mockImplementation(({ children }) => <>{children}</>),
  useModal: jest.fn().mockImplementation(() => [mockShowModal, mockHideModal])
}));

afterEach(() => {
  mockShowModal.mockClear();
  mockHideModal.mockClear();
});

describe('NavigationLink', () => {
  it('shows a modal when in flow', () => {
    const store = mockStore({
      flow: {
        isFlow: true
      }
    });

    const component = getComponent(<NavigationLink to="/" />, store);
    component.simulate('click');

    expect(mockShowModal).toHaveBeenCalledTimes(1);
  });

  it("doesn't show a modal when not in flow", () => {
    const store = mockStore({
      flow: {
        isFlow: false
      }
    });

    const component = getComponent(<NavigationLink to="/" />, store);
    component.simulate('click');

    expect(mockShowModal).not.toHaveBeenCalled();
  });
});
