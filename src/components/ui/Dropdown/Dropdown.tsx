import { ChangeEvent, FunctionComponent } from 'react';
import { DropdownContainer, DropdownOption } from './Dropdown.styles';

interface Props {
  value: string;
  items: string[];

  onChange(value: string): void;
}

const Dropdown: FunctionComponent<Props> = ({ value, items, onChange }) => {
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value);
  };

  return (
    <DropdownContainer onChange={handleChange} value={value}>
      {items.map((item, index) => (
        <DropdownOption key={index} value={item}>
          {item}
        </DropdownOption>
      ))}
    </DropdownContainer>
  );
};

export default Dropdown;
