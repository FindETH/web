import { Wallet } from '@findeth/wallets';
import React, { FunctionComponent } from 'react';
import { PAGE_TRANSITION_PROPS } from '../../PageTransition';
import Section from '../../ui/Section';
import Typography from '../../ui/Typography';
import { FlowComponentProps } from '../Flow';

type Props = FlowComponentProps<{ implementation: Wallet }>;

const SelectOptions: FunctionComponent<Props> = () => {
  // const handleNext = () => {
  //  return onNext();
  // };

  return (
    <Section {...PAGE_TRANSITION_PROPS}>
      <Typography>Select options</Typography>
    </Section>
  );
};

export default SelectOptions;
