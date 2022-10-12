import shortid from 'shortid';
import { OptionList, OptionItem, OptionButton } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <section>
      <h2>Please leave feedback</h2>
      <OptionList>
        {options.map(option => (
          <OptionItem key={shortid.generate()}>
            <OptionButton type="button" onClick={onLeaveFeedback(option)}>
              {option}
            </OptionButton>
          </OptionItem>
        ))}
      </OptionList>
    </section>
  );
};
