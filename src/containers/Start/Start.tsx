import { RouteComponentProps } from '@reach/router';
import React, { FunctionComponent } from 'react';
import daiIcon from '../../assets/images/logos/dai.svg';
import ethereumIcon from '../../assets/images/logos/ethereum.svg';
import walletIcon from '../../assets/images/wallet.svg';
import PanelItemLink from '../../components/PanelItemLink';
import Container from '../../components/ui/Container';
import Heading from '../../components/ui/Heading';
import List from '../../components/ui/List';
import Typography from '../../components/ui/Typography';

type Props = RouteComponentProps;

const Start: FunctionComponent<Props> = () => (
  <>
    <Container>
      <Heading as="h1">What are you looking for?</Heading>
      <Typography>Choose whether you're looking for an address, or Ether or tokens.</Typography>
    </Container>
    <Container small={true}>
      <List>
        <PanelItemLink
          to="/flow/address"
          title="Address"
          description="Search for a specific address"
          icon={walletIcon}
        />
        <PanelItemLink
          to="/flow/ether"
          title="Ether"
          description="Search for Ether on any address"
          icon={ethereumIcon}
        />
        <PanelItemLink
          to="/flow/tokens"
          title="ERC-20 Tokens"
          description="Search for ERC-20 based tokens on any address"
          icon={daiIcon}
        />
      </List>
    </Container>
  </>
);

export default Start;
