import React, { useState } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Layout } from './Layout';

export const App = () => {
  const [feedbacks, setFeedbacks] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  const { good, neutral, bad } = feedbacks;
  const leaveFeedback = prop => {
    setFeedbacks(prevState => ({
      ...prevState,
      [prop]: feedbacks[prop] + 1,
    }));
  };

  const totalFeedbacks = Object.values(feedbacks).reduce(
    (previousValue, number) => {
      return previousValue + number;
    }
  );

  const positiveFeedbackPercentage = Math.round((good / totalFeedbacks) * 100);

  return (
    <Layout>
      <Section title="Please leave feedback">
        <FeedbackOptions
          propFeedbacks={Object.keys(feedbacks)}
          onLeaveFeedback={leaveFeedback}
        />
      </Section>
      <Section title="Statistics">
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={totalFeedbacks}
          positivePercentage={positiveFeedbackPercentage}
        />
      </Section>
    </Layout>
  );
};
