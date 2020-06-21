import { DerivationPath } from '@findeth/wallets';
import React, { FunctionComponent, useEffect, useState } from 'react';
import PathCheckbox from './DerivationPath';

interface Props {
  derivationPaths: DerivationPath[];

  onChange(derivationPaths: DerivationPath[]): void;
}

const DerivationPaths: FunctionComponent<Props> = ({ derivationPaths, onChange }) => {
  const [selectedPaths, setSelectedPaths] = useState<DerivationPath[]>(derivationPaths);

  const handleToggle = (derivationPath: DerivationPath) => {
    if (!selectedPaths.find(path => path.name === derivationPath.name)) {
      return setSelectedPaths(paths => [...paths, derivationPath]);
    }

    setSelectedPaths(paths => paths.filter(path => path.name !== derivationPath.name));
  };

  useEffect(() => {
    onChange(selectedPaths);
  }, [selectedPaths]);

  return (
    <>
      {derivationPaths.map(derivationPath => (
        <PathCheckbox
          key={derivationPath.name}
          path={derivationPath}
          selected={!!selectedPaths.find(path => path.name === derivationPath.name)}
          onToggle={handleToggle}
        />
      ))}
    </>
  );
};

export default DerivationPaths;
