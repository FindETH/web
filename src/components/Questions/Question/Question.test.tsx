import { getComponent } from '../../../utils/test-utils';
import Question from './Question';
import { QuestionHeading } from './Question.styles';

describe('Question', () => {
  it('renders the title', () => {
    const component = getComponent(<Question title="Foo">Bar</Question>);
    expect(component.text()).toContain('Foo');
    expect(component.text()).not.toContain('Bar');
  });

  it('renders the children when clicked', () => {
    const component = getComponent(<Question title="Foo">Bar</Question>);
    component.find(QuestionHeading).simulate('click');

    expect(component.text()).toContain('Foo');
    expect(component.text()).toContain('Bar');
  });
});
