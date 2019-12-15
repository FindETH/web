import { motion } from 'framer-motion';
import styled from 'styled-components';

export const LedgerMenu = styled(motion.ul)`
  margin: 0 0 0 calc(50px + 1rem);
  padding: 0;
  list-style-type: none;
  overflow: hidden;
`;

export const LedgerMenuItem = styled.li`
  padding-bottom: 1rem;
  transition: color 0.3s;
  cursor: pointer;

  :last-of-type {
    padding-bottom: 0;
  }

  :hover {
    color: ${({ theme }) => theme.linkColor};
  }
`;
