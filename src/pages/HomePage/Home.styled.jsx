import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0;
  margin: 0;
  gap: 40px;
`;

export const ListItem = styled.li`
  background-color: #09131d;
  border-radius: 5px;

  &:hover,
  &:focus {
    transform: scale(1.05);
    box-shadow: 0 0 4px 0px #415a77;
  }
`;

export const Text = styled.p`
  color: #ffffff;
  font-size: 16px;
  line-height: 1.5;
  margin: 0;
  padding: 10px;
`;

export const Title = styled.h1`
  color: rgb(224, 225, 221);
  font-size: 32px;
  line-height: 2.5;
  margin: 0;
  padding: 10px;
`;
