import React, { FunctionComponent } from 'react';
import FAQ from '../../containers/FAQ';
import Flow from '../../containers/Flow';
import Home from '../../containers/Home';
import { WrappedRouter } from './Routes.styles';

const Routes: FunctionComponent = () => (
  <WrappedRouter>
    <Home path="/" default={true} />
    <FAQ path="/faq" />
    <Flow path="/flow/:flow" />
  </WrappedRouter>
);

export default Routes;
