import React, { FunctionComponent } from 'react';
import myCryptoLogo from '../../../assets/images/logos/mycrypto.svg';
import Link from '../../Link';
import Typography from '../../ui/Typography';
import { MyCryptoLogo } from './PoweredBy.styles';

const PoweredBy: FunctionComponent = () => (
  <Typography>
    Powered by{' '}
    <Link to="https://mycrypto.com" external={true}>
      <MyCryptoLogo src={myCryptoLogo} alt="MyCrypto" />
    </Link>
  </Typography>
);

export default PoweredBy;
