import { FunctionComponent } from 'react';
import Container from '../Container';
import Heading from '../Heading';
import Meta from '../Meta';
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
