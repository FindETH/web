import React, { FunctionComponent } from 'react';
import { useSelector } from '../../hooks';
import Section from '../ui/Section';
import Typography from '../ui/Typography';

const CheckConnection: FunctionComponent = ({ children }) => {
  const isOnline = useSelector(state => state.network.isOnline);

  if (isOnline) {
    return <>{children}</>;
  }

  return (
    <Section>
      <Typography>This functionality requires an internet connection.</Typography>
    </Section>
  );
};

export default CheckConnection;
