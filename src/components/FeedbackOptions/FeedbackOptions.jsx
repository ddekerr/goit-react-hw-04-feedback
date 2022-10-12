import shortid from 'shortid';
import PropTypes from 'prop-types';
import { OptionList, OptionItem, OptionButton } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <OptionList>
      {options.map(option => (
        <OptionItem key={shortid.generate()}>
          <OptionButton type="button" onClick={onLeaveFeedback(option)}>
            {option}
          </OptionButton>
        </OptionItem>
      ))}
    </OptionList>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
