import { Router } from '@reach/router';
import React, { FunctionComponent } from 'react';
import Ether from '../features/flow/Ether';

/**
 * Router for `/flow/*`. This is registered as client-only route in Gatsby.
 */
const FlowRouter: FunctionComponent = () => (
  <Router basepath="/flow">
    <Ether path="/ether" default={true} />
  </Router>
);

export default FlowRouter;
