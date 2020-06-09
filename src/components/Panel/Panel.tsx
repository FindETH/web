import React, { FunctionComponent } from 'react';
import Link from '../Link';
import { PanelContainer, PanelContent } from './Panel.styles';

interface Props {
  to?: string;
  onClick?(): void;
}

const Panel: FunctionComponent<Props> = ({ to, onClick, children }) => {
  const element = (
    <PanelContainer onClick={onClick}>
      <PanelContent>{children}</PanelContent>
    </PanelContainer>
  );

  if (to) {
    return <Link to={to}>{element}</Link>;
  }

  return element;
};

export default Panel;
