import { FunctionComponent } from 'react';
import Meta from '../Meta';
import Heading from '../ui/Heading';
import { Main } from './Page.styles';
import PageHeader from './PageHeader';

interface Props {
  title: string;
}

const Page: FunctionComponent<Props> = ({ title, children }) => (
  <>
    <Meta title={title} />

    <PageHeader>
      <Heading as="h2">{title}</Heading>
    </PageHeader>

    <Main>{children}</Main>
  </>
);

export default Page;
