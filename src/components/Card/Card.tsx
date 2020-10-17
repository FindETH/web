import { DetailedHTMLProps, FunctionComponent, HTMLAttributes } from 'react';
import { CardContainer } from './Card.styles';

type Props = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

const Card: FunctionComponent<Props> = ({ children, ref: _, ...props }) => (
  <CardContainer {...props}>{children}</CardContainer>
);

export default Card;
