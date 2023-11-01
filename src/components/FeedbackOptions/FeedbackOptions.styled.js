import styled from 'styled-components';

export const ButtonWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
`;

export const Button = styled.button`
  display: block;
  text-transform: capitalize;

  background-color: #0a66c2;
  border: 0;
  border-radius: 25px;
  color: #ffffff;
  font-size: 16px;
  padding: 10px 20px;

  &:first-child {
    &:hover{
      background-color: green;
    }
  }
  &:last-child {
    &:hover {
      background-color: red;
    }
}
&:hover {
  background-color: #16437e;
}
`;
