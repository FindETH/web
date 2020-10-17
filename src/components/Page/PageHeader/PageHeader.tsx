import { FunctionComponent } from 'react';
import { PageHeaderContainer } from './PageHeader.styles';

const PageHeader: FunctionComponent = ({ children }) => <PageHeaderContainer>{children}</PageHeaderContainer>;

export default PageHeader;
