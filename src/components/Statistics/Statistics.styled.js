import styled from 'styled-components';

export const List = styled.ul`
  margin-right: auto;
  margin-left: auto;
  width: 280px;
`;

export const ListItem = styled.li`
  padding: 10px 20px;

  &:nth-child(-n + 3) {
    text-align: center;
  }
`;
