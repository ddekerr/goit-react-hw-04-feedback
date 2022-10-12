import { StatisticItem } from "./Statistics.styled";

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <section>
      <h2>Statistics</h2>
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
          <span>{positivePercentage}</span>
        </StatisticItem>
      </ul>
    </section>
  );
};
