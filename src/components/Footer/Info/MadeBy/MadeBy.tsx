import { FunctionComponent } from 'react';
import Link from '../../../Link';
import Typography from '../../../ui/Typography';

const MadeBy: FunctionComponent = () => (
  <Typography>
    Made by{' '}
    <Link to="https://github.com/Mrtenz" external={true}>
      Maarten Zuidhoorn
    </Link>
  </Typography>
);

export default MadeBy;
