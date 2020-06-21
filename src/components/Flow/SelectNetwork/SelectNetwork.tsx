import { getDefaultNetwork, getSupportedNetworks, Network } from '@findeth/networks';
import React, { FunctionComponent, useState } from 'react';
import Meta from '../../Meta';
import Button from '../../ui/Button';
import Container from '../../ui/Container';
import Dropdown from '../../ui/Dropdown';
import Heading from '../../ui/Heading';
import Section from '../../ui/Section';
import Typography from '../../ui/Typography';
import { FlowComponentProps } from '../Flow';

type Props = FlowComponentProps<{ network: Network }>;

const SelectNetwork: FunctionComponent<Props> = ({ onNext }) => {
  const [networkName, setNetworkName] = useState<string>(getDefaultNetwork().name);

  const handleNext = () => {
    const network = getSupportedNetworks().find(network => network.name === networkName);
    if (!network) {
      // This should never happen
      throw new Error('Invalid network selected');
    }

    return onNext({ network });
  };

  return (
    <Section>
      <Meta title="Choose a network" />

      <Container>
        <Heading as="h2">Choose a network</Heading>
        <Typography>
          Which network would you like to use? FindETH is compatible with Ethereum and other EVM-like networks.
        </Typography>
        <Dropdown
          items={getSupportedNetworks().map(network => network.name)}
          value={networkName}
          onChange={setNetworkName}
        />
        <Button onClick={handleNext}>Next</Button>
      </Container>
    </Section>
  );
};

export default SelectNetwork;
