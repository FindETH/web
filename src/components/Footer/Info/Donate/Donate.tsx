import React, { FunctionComponent } from 'react';
import Link from '../../../Link';
import Typography from '../../../ui/Typography';
import { DonateContainer } from './Donate.styles';

const Donate: FunctionComponent = () => (
  <DonateContainer>
    <Typography>
      Donate (ETH):
      <br />
      <Link to="https://etherscan.io/address/0xDFDD854DaAD30E6E077AEf1c653169968c102E34" external={true}>
        0xDFDD854DaAD30E6E077AEf1c653169968c102E34
      </Link>
    </Typography>
  </DonateContainer>
);

export default Donate;
