import { FunctionComponent } from 'react';
import { IconName } from '../../Icon';
import { ArrowIcon, CardIcon, CardListItemContainer, CardListItemContent } from './CardListItem.styles';

export interface Props {
  icon?: IconName;
  onClick(): void;
}

const CardListItem: FunctionComponent<Props> = ({ icon, onClick, children }) => (
  <CardListItemContainer onClick={onClick}>
    {icon && <CardIcon icon={icon} />}
    <CardListItemContent>{children}</CardListItemContent>
    <ArrowIcon icon="arrow" />
  </CardListItemContainer>
);

export default CardListItem;
