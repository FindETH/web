import React, { ChangeEvent, FunctionComponent, useEffect, useState } from 'react';

interface Props {
  onChange(depth: number): void;
}

const Depth: FunctionComponent<Props> = ({ onChange }) => {
  const [depth, setDepth] = useState(10);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setDepth(Number(event.target.value));
  };

  useEffect(() => {
    onChange(depth);
  }, [depth]);

  return <input type="number" value={depth} onChange={handleChange} />;
};

export default Depth;
