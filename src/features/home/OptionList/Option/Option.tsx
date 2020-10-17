import { navigate } from 'gatsby';
import { FunctionComponent } from 'react';
import CardListItem from '../../../../components/CardList/CardListItem';
import Heading from '../../../../components/ui/Heading';
import Typography from '../../../../components/ui/Typography';
import { SearchType } from '../../../../types/search';

interface Props {
  title: string;
  description: string;
  type: SearchType;
}

const Option: FunctionComponent<Props> = ({ title, description, type }) => {
  const handleClick = () => {
    navigate(`/flow/${type}`);
  };

  return (
    <CardListItem onClick={handleClick}>
      <Heading as="h4">{title}</Heading>
      <Typography>{description}</Typography>
    </CardListItem>
  );
};

export default Option;
