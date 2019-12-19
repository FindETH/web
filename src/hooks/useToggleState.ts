import { useState } from 'react';

type ToggleFunction = (state?: boolean) => void;

/**
 * React hook to get a boolean state which is toggleable with a simple function.
 *
 * @param {boolean} defaultValue
 * @return {[boolean, ToggleFunction]}
 */
export const useToggleState = (defaultValue?: boolean): [boolean, ToggleFunction] => {
  const [isToggled, setToggled] = useState(defaultValue ?? false);

  const handleToggle: ToggleFunction = (state?: boolean) => {
    if (state !== undefined) {
      return setToggled(state);
    }

    setToggled(!isToggled);
  };

  return [isToggled, handleToggle];
};
