import React from 'react';
import { List, ListItem } from './Statistics.styled';
import { Notification } from './Notification/Notification';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
    return (
    <List>
      <ListItem>Good: {good}</ListItem>
      <ListItem>Neutral: {neutral}</ListItem>
      <ListItem>Bad: {bad}</ListItem>
      {total > 0 ? (
        <>
          <ListItem>Total: {total}</ListItem>
          <ListItem>Positive feedback: {positivePercentage}%</ListItem>
        </>
      ) : (
        <Notification message="There is no feedback" />
      )}
    </List>
  );
};
