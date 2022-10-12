import PropTypes from 'prop-types';
import { StatisticItem } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <ul>
      <StatisticItem>
        <p>Good</p>
        <span>{good}</span>
      </StatisticItem>
      <StatisticItem>
        <p>Neutral</p>
        <span>{neutral}</span>
      </StatisticItem>
      <StatisticItem>
        <p>Bad</p>
        <span>{bad}</span>
      </StatisticItem>
      <StatisticItem>
        <p>Total</p>
        <span>{total}</span>
      </StatisticItem>
      <StatisticItem>
        <p>Positive Feedback</p>
        <span>{positivePercentage}%</span>
      </StatisticItem>
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
}
