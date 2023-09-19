import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin-bottom: 20px;
  > img {
    margin-right: 10px;
  }
`;

export const ListItem = styled.li`
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0px;
  }
`;

export const GenresList = styled.ul`
  display: flex;
`;

export const GenresItem = styled.ul`
  margin-right: 10px;
  &:last-child {
    margin-right: 0px;
  }
`;

export const InfoList = styled.ul`
  display: flex;
  margin-bottom: 10px;
  > li {
    margin-right: 10px;
    &:last-child {
      margin-right: 0px;
    }
  }
`;
