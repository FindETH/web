import { Router } from '@reach/router';
import React, { FunctionComponent } from 'react';
import Flow from '../containers/Flow';

/**
 * Router for `/flow/*`. This is registered as client-only route in Gatsby.
 */
const FlowRouter: FunctionComponent = () => (
  <Router basepath="/flow">
    <Flow flow="ether" path="/ether" />
  </Router>
);

export default FlowRouter;
