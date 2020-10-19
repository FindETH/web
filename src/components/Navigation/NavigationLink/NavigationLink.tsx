import { navigate } from 'gatsby';
import { AnchorHTMLAttributes, DetailedHTMLProps, FunctionComponent, MouseEvent } from 'react';
import { useModal } from 'react-modal-hook';
import { useSelector } from '../../../utils/hooks';
import Button from '../../Button';
import Heading from '../../Heading';
import Modal, { ModalContent } from '../../Modal';
import { ModalButtons } from '../../Modal/Modal.styles';
import Typography from '../../Typography';
import { LinkWrapper } from './NavigationLink.styles';

interface OwnProps {
  to: string;
}

type Props = OwnProps & Omit<DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>, 'href'>;

const NavigationLink: FunctionComponent<Props> = ({ to, children, ref: _, ...rest }) => {
  const isFlow = useSelector((state) => state.flow.isFlow);
  const [showModal, hideModal] = useModal(() => (
    <Modal>
      <ModalContent>
        <Heading as="h3">Stop search?</Heading>
        <Typography>Are you sure you want to stop searching for your address or assets?</Typography>
      </ModalContent>
      <ModalButtons>
        <Button onClick={hideModal}>Back</Button>
        <Button type="danger" onClick={handleConfirm}>
          Stop
        </Button>
      </ModalButtons>
    </Modal>
  ));

  const handleConfirm = () => {
    hideModal();
    navigate(to);
  };

  const handleClick = (event: MouseEvent) => {
    if (isFlow) {
      event.preventDefault();
      showModal();
    }
  };

  return (
    <LinkWrapper to={to} onClick={handleClick} activeClassName="active" {...rest}>
      {children}
    </LinkWrapper>
  );
};

export default NavigationLink;
