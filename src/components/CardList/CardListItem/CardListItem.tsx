import { FunctionComponent } from 'react';
import Icon from '../../Icon';
import { CardListItemContainer, CardListItemContent } from './CardListItem.styles';

interface Props {
  onClick(): void;
}

const CardListItem: FunctionComponent<Props> = ({ onClick, children }) => {
  return (
    <CardListItemContainer onClick={onClick}>
      <CardListItemContent>{children}</CardListItemContent>
      <Icon icon="arrow" />
    </CardListItemContainer>
  );
};

export default CardListItem;
