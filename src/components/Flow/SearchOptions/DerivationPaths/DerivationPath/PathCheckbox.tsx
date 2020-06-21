import { DerivationPath } from '@findeth/wallets';
import React, { FunctionComponent } from 'react';

interface Props {
  path: DerivationPath;
  selected: boolean;

  onToggle(path: DerivationPath): void;
}

const PathCheckbox: FunctionComponent<Props> = ({ path, selected, onToggle }) => {
  const handleToggle = () => {
    onToggle(path);
  };

  return (
    <label>
      <input type="checkbox" checked={selected} onChange={handleToggle} />
      {path.name}
    </label>
  );
};

export default PathCheckbox;
