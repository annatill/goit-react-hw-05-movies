import styled from '@emotion/styled';

export const Forma = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
  margin-top: 20px;
`;

export const Input = styled.input`
  width: 355px;
  height: 30px;
  border-radius: 5px;
  border: none;
  padding: 5px 15px;
  margin-right: 10px;
  font-size: 16px;
  line-height: 1.5;
  color: #e0e1dd;
  background-color: #09131d;
  outline: none;
  &:focus {
    box-shadow: 0 0 4px 0px #415a77;
  }
`;

export const Button = styled.button`
  width: 100px;
  height: 40px;
  border-radius: 5px;
  border: none;
  padding: 0;
  font-size: 16px;
  line-height: 1.5;
  color: #e0e1dd;
  background-color: #09131d;
  outline: none;
  &:focus,
  &:hover {
    box-shadow: 0 0 4px 0px #415a77;
  }
`;

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
