import styled from 'styled-components';
import StyledButton from '../Button/Button.styles';
import { InputContainer } from '../Input';

const InputGroup = styled.div`
  display: flex;

  ${InputContainer} {
    flex: 1;
  }

  ${StyledButton} {
    margin: 0 0 0 0.5rem !important;
    height: 100%;
  }
`;

export default InputGroup;
