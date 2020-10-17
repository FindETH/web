import styled from 'styled-components';

interface Props {
  small: boolean;
}

const Card = styled.section<Props>`
  margin: 1.5rem auto;
  width: ${({ small }) => (small ? '40rem' : '75rem')};
  background: white;
  padding: 1.5rem;
  border-radius: ${({ theme }) => theme.mediumBorderRadius};
  box-shadow: ${({ theme }) => theme.smallShadow};
`;

export default Card;
