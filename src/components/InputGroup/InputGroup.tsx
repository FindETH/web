import styled from 'styled-components';
import { InputContainer } from '../Input';
import Button from '../ui/Button';

const InputGroup = styled.div`
  display: flex;

  ${InputContainer} {
    flex: 1;
  }

  ${Button} {
    margin: 0 0 0 0.5rem !important;
    height: 100%;
  }
`;

export default InputGroup;
