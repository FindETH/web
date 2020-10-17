import { FunctionComponent } from 'react';
import { CardContainer } from './Card.styles';

const Card: FunctionComponent = ({ children }) => <CardContainer>{children}</CardContainer>;

export default Card;
