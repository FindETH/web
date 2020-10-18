import styled from 'styled-components';
import Button from '../Button';
import { InputContainer } from '../Input';

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
