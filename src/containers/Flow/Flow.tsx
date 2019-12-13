import { RouteComponentProps } from '@reach/router';
import React, { FunctionComponent } from 'react';
import EtherFlow from './EtherFlow';

const FLOWS = {
  ether: EtherFlow
};

type Props = RouteComponentProps<{ flow: keyof typeof FLOWS }>;

const Flow: FunctionComponent<Props> = ({ navigate, flow }) => {
  if (!flow || !FLOWS[flow]) {
    if (navigate) {
      navigate('/start');
    }
    return null;
  }

  const FlowComponent = FLOWS[flow];
  return <FlowComponent />;
};

export default Flow;
