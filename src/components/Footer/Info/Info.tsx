import React, { FunctionComponent } from 'react';
import Donate from './Donate';
import { InfoContainer } from './Info.styles';
import MadeBy from './MadeBy';

const Info: FunctionComponent = () => (
  <InfoContainer>
    <MadeBy />
    <Donate />
  </InfoContainer>
);

export default Info;
