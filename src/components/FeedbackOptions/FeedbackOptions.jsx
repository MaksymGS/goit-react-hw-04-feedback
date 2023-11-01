import React from 'react';
import { Button, ButtonWrap } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
    <ButtonWrap>
      {options.map((item, idx) => (
        <Button
          key={idx}
          value={item}
          onClick={event => onLeaveFeedback(event.target.value)}
        >
          {item}
        </Button>
      ))}
    </ButtonWrap>
  );
};
