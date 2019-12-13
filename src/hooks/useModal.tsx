import React, { ReactElement, useState } from 'react';
import Modal from '../components/Modal';

export const useModal = (content: ReactElement): [ReactElement | null, (state?: boolean) => void] => {
  const [isVisible, setVisible] = useState<boolean>(false);

  const toggleModal = (state?: boolean) => {
    setVisible(state ?? !isVisible);
  };

  const handleClose = () => {
    toggleModal(false);
  };

  return [
    <Modal isVisible={isVisible} onClose={handleClose} key="modal">
      {content}
    </Modal>,
    toggleModal
  ];
};
