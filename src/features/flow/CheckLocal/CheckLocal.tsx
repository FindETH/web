import { FunctionComponent } from 'react';
import { IS_LOCAL } from '../../../constants';
import NotLocal from '../Local';

interface Props {
  isLocal?: boolean;
}

const CheckLocal: FunctionComponent<Props> = ({ isLocal = IS_LOCAL, children }) => {
  if (isLocal) {
    return <>{children}</>;
  }

  return <NotLocal />;
};

export default CheckLocal;
