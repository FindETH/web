import { FunctionComponent } from 'react';
import Page from '../components/Page';
import Search from '../features/search';

/**
 * This page is registered as client-only route in Gatsby.
 */
const SearchPage: FunctionComponent = () => (
  <Page title="Searching">
    <Search />
  </Page>
);

export default SearchPage;
