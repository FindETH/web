import { navigate } from '@reach/router';
import { FunctionComponent } from 'react';
import PanelItem, { Props as PanelItemProps } from '../PanelItem/PanelItem';

type Props = Exclude<PanelItemProps, 'onClick'> & { to: string };

const PanelItemLink: FunctionComponent<Props> = ({ to, children, ...props }) => {
  const handleClick = async (): Promise<void> => {
    await navigate(to);
  };

  return (
    <PanelItem onClick={handleClick} {...props}>
      {children}
    </PanelItem>
  );
};

export default PanelItemLink;
