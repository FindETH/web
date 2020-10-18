import { getStyledComponent } from '../../utils/test-utils';
import Modal from './Modal';
import { ModalButtons, ModalContent } from './Modal.styles';

describe('Modal', () => {
  it('renders correctly', () => {
    const component = getStyledComponent(
      <Modal>
        <ModalContent>Foo bar</ModalContent>
        <ModalButtons>Baz qux</ModalButtons>
      </Modal>
    );
    expect(component).toMatchSnapshot();
  });
});
