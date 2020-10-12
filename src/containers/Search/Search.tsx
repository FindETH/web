import { RouteComponentProps } from '@reach/router';
import React, { ComponentType, FunctionComponent } from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface HandlerProps {
  // TODO
}

interface OwnProps {
  handler: ComponentType<HandlerProps>;
}

type Props = RouteComponentProps & OwnProps;

const Search: FunctionComponent<Props> = ({ handler: Handler }) => <Handler />;

export default Search;
