import { motion } from 'framer-motion';
import styled from 'styled-components';

const Section = styled(motion.section)`
  padding: 4rem 0;
  background: ${({ theme }) => theme.sectionBackground};

  :nth-child(odd) {
    background: ${({ theme }) => theme.sectionOddBackground};
  }

  :first-of-type {
    padding-top: 2rem;
  }

  :last-of-type {
    flex: 1;
  }
`;

export default Section;
