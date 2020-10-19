import styled from 'styled-components';
import Icon from '../Icon';
import { Image } from '../Icon/Icon.styles';
import Typography from '../Typography';

export const AlertContainer = styled.div`
  margin: 0 auto 1.5rem auto;
  width: 40rem;
  max-width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  background: #f8dddd;
  border-radius: ${({ theme }) => theme.smallBorderRadius};
  padding: 1rem;
  color: #c81e1d;

  strong {
    font-weight: 500;
  }

  ${Typography} {
    color: #c70504;
    margin: 0;
  }

  ${Image} {
    padding-right: 1rem;
  }
`;

export const AlertContent = styled.div`
  flex: 1;
`;

export const CloseIcon = styled(Icon)`
  align-self: center;
  margin-left: 1rem;
  cursor: pointer;
`;
