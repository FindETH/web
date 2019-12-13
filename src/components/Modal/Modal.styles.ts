import { motion } from 'framer-motion';
import { transparentize } from 'polished';
import styled from 'styled-components';

export const ModalBackground = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: ${({ theme }) => transparentize(0.5, theme.primaryColor)};
`;

export const ModalWrapper = styled(motion.div)`
  min-width: 18rem;
  max-width: 95%;
  background: ${({ theme }) => theme.modalBackground};
  border-radius: ${({ theme }) => theme.smallBorderRadius};
  padding: 1.6rem;
`;

export const ModalButtons = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: flex-end;
`;
