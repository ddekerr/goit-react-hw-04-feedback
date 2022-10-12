import { Component } from 'react';
import { Wrapper } from './App.styled';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';

const feedbackOptions = ['good', 'neutral', 'bad'];

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  leaveFeedback = stateKey => () => {
    this.setState(prevState => {
      return { [stateKey]: prevState[stateKey] + 1 };
    });
  };

  countTotalFeedback() {
    return this.state.good + this.state.neutral + this.state.bad;
  }

  countPositiveFeedbackPercentage() {
    if (this.state.good > 0) {
      return (
        Math.floor((this.state.good / this.countTotalFeedback()) * 100) + '%'
      );
    }
    return 0;
  }

  render() {
    return (
      <Wrapper>
        <FeedbackOptions
          options={feedbackOptions}
          onLeaveFeedback={this.leaveFeedback}
        />
        <section>
          <h2>Statistics</h2>
          <ul>
            <li>
              <p>Good</p>
              <span>{this.state.good}</span>
            </li>
            <li>
              <p>Neutral</p>
              <span>{this.state.neutral}</span>
            </li>
            <li>
              <p>Bad</p>
              <span>{this.state.bad}</span>
            </li>
            <li>
              <p>Total</p>
              <span>{this.countTotalFeedback()}</span>
            </li>
            <li>
              <p>Positive Feedback</p>
              <span>{this.countPositiveFeedbackPercentage()}</span>
            </li>
          </ul>
        </section>
      </Wrapper>
    );
  }
}
