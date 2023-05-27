import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  display: inline-block;
  text-align: center;
  width: 100px;
  height: 25px;
  border-radius: 5px;
  border: none;
  padding: 10px;
  margin-bottom: 20px;
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

export const Title = styled.h1`
  color: rgb(224, 225, 221);
  font-size: 32px;
  line-height: 2.5;
  margin: 0;
  padding: 10px;
`;

export const Container = styled.div`
  padding: 20px;
  text-align: start;
`;

export const ContainerInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding-bottom: 20px;
  margin-bottom: 20px;
  border-bottom: 1px solid #2e4059;
`;

export const ContainerDescription = styled.div`
  padding: 0px 30px;
  text-align: start;
`;

export const MovieTitle = styled.h2`
  margin-top: 0;
`;

export const ListGenres = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin: 0;
  list-style: none;
`;

export const ListItem = styled.li`
  margin-right: 10px;
`;

export const ListInfo = styled.ul`
  padding-bottom: 20px;
  padding-left: 20px;
  margin: 0;
  list-style: circle;
  border-bottom: 1px solid #2e4059;
`;
