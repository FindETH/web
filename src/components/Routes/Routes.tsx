import React, { FunctionComponent } from 'react';
import FAQ from '../../containers/FAQ';
import Flow from '../../containers/Flow';
import Home from '../../containers/Home';
import Start from '../../containers/Start';
import { WrappedRouter } from './Routes.styles';

const Routes: FunctionComponent = () => (
  <WrappedRouter>
    <Home path="/" default={true} />
    <Start path="/start" />
    <FAQ path="/faq" />
    <Flow path="/flow/:flow" />
  </WrappedRouter>
);

export default Routes;
