import { Router } from '@reach/router';
import { FunctionComponent } from 'react';
import AddressFlow from '../features/flow/AddressFlow';
import AssetFlow from '../features/flow/AssetFlow';
import { SearchType } from '../types/search';

const getRoute = (searchType: SearchType) => `/${searchType}`;

/**
 * Router for `/flow/*`. This is registered as client-only route in Gatsby.
 */
const FlowRouter: FunctionComponent = () => (
  <Router basepath="/flow">
    <AddressFlow path={getRoute(SearchType.ADDRESS)} />
    <AssetFlow path={getRoute(SearchType.ASSETS)} default={true} />
  </Router>
);

export default FlowRouter;
