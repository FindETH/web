import { Router } from '@reach/router';
import React, { FunctionComponent } from 'react';
import Search from '../containers/Search';
import Ether from '../containers/Search/Ether';

/**
 * Router for `/search/*`. This is registered as client-only route in Gatsby.
 */
const SearchRouter: FunctionComponent = () => (
  <Router basepath="/search">
    <Search path="/ether" handler={Ether} />
  </Router>
);

export default SearchRouter;
