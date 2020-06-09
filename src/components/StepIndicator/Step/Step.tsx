import styled from 'styled-components';

interface Props {
  active?: boolean;
}

const Step = styled.div<Props>`
  width: 0.4rem;
  height: 0.4rem;
  border: 0.2rem solid ${({ theme }) => theme.primaryColor};
  border-radius: 50%;
  background: ${({ active, theme }) => (active ? 'none' : theme.primaryColor)};
  transition: border 0.3s, background-color 0.3s;
  margin-right: 0.25rem;

  :last-of-type {
    margin-right: 0;
  }
`;

export default Step;
