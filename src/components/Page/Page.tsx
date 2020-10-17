import { FunctionComponent } from 'react';
import Meta from '../Meta';
import Container from '../ui/Container';
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
      <Container>
        <Heading as="h2">{title}</Heading>
      </Container>
    </PageHeader>

    <Main>{children}</Main>
  </>
);

export default Page;
