import { FunctionComponent } from 'react';
import Typography from '../ui/Typography';
import { FlexWrapper, ItemContainer, ItemDescription, ItemHeading, ItemIcon } from './PanelItem.styles';

export interface Props {
  title: string;
  description: string;
  icon: string;
  highlight?: boolean;

  onClick?(): void;
}

const PanelItem: FunctionComponent<Props> = ({ title, description, icon, highlight = false, onClick, children }) => (
  <ItemContainer>
    <FlexWrapper highlight={highlight} onClick={onClick}>
      <ItemIcon src={icon} alt={title} />
      <ItemDescription>
        <ItemHeading>{title}</ItemHeading>
        <Typography>{description}</Typography>
      </ItemDescription>
    </FlexWrapper>
    {children}
  </ItemContainer>
);

export default PanelItem;
