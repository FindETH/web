import { RouteComponentProps } from '@reach/router';
import React, { FunctionComponent, ReactElement, useEffect, useState } from 'react';
import EtherFlow from './EtherFlow';

const FLOWS = {
  ether: EtherFlow
};

type Props = RouteComponentProps<{ flow: keyof typeof FLOWS }>;

const Flow: FunctionComponent<Props> = ({ navigate, flow }) => {
  const [FlowComponent, setFlowComponent] = useState<ReactElement>();

  useEffect(() => {
    if (!flow || !FLOWS[flow]) {
      navigate!('/start');
      return;
    }

    const Component = FLOWS[flow];
    setFlowComponent(<Component />);
  }, [flow]);

  if (FlowComponent) {
    return FlowComponent;
  }

  return null;
};

export default Flow;
