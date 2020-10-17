import { FunctionComponent } from 'react';
import CardList from '../../../components/CardList/CardList';
import { SearchType } from '../../../types/search';
import Option from './Option';

const OPTIONS = [
  {
    title: 'Addresses',
    description: "Use this option if you're looking for a specific address.",
    type: SearchType.ADDRESS
  },
  {
    title: 'Assets',
    description: "Use this option if you're looking for Ether, ERC-20 tokens, or other supported assets.",
    type: SearchType.ETHER
  }
];

const OptionList: FunctionComponent = () => {
  return (
    <CardList>
      {OPTIONS.map(({ ...props }, index) => (
        <Option key={index} {...props} />
      ))}
    </CardList>
  );
};

export default OptionList;
