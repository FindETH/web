import { FunctionComponent, ReactElement } from 'react';
import Panel from '../ui/Panel';
import { InstructionsListWrapper, ItemIndicator } from './InstructionsList.styles';

interface Props {
  items: ReactElement[];
}

const InstructionsList: FunctionComponent<Props> = ({ items }) => (
  <InstructionsListWrapper>
    {items.map((item, index) => (
      <Panel key={`panel-list-${index}`} as="li">
        <ItemIndicator>{index + 1}.</ItemIndicator>

        {item}
      </Panel>
    ))}
  </InstructionsListWrapper>
);

export default InstructionsList;
