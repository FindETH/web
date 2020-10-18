import { navigate } from 'gatsby';
import { FunctionComponent } from 'react';
import CardListItem from '../../../../components/CardList/CardListItem';
import Heading from '../../../../components/Heading';
import { IconName } from '../../../../components/Icon';
import Typography from '../../../../components/Typography';
import { SearchType } from '../../../../types/search';

interface Props {
  icon: IconName;
  title: string;
  description: string;
  type: SearchType;
}

const Option: FunctionComponent<Props> = ({ icon, title, description, type }) => {
  const handleClick = () => {
    navigate(`/flow/${type}`);
  };

  return (
    <CardListItem icon={icon} onClick={handleClick}>
      <Heading as="h4">{title}</Heading>
      <Typography>{description}</Typography>
    </CardListItem>
  );
};

export default Option;
