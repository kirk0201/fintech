import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const News = styled.div`
  margin: 1rem 1rem;
  padding: 1rem 2rem;
  border-radius: 15px;
  border: 1px solid black;
  box-shadow: 5px 5px 7px gray;
  cursor: pointer;
  &:hover {
    background-color: skyblue;
  }
`;
const NewsHeader = styled.div`
  display: flex;
  flex-direction: column;
`;
const Title = styled.div`
  font-weight: 700;
`;
const Date = styled.div`
  font-size: 0.7rem;
  text-align: right;
`;
const Author = styled.div`
  font-size: 0.8rem;
  text-align: left;
`;
const SearchResult = ({ data }) => {
  return (
    <Container>
      {data
        ? data.map((news, i) => (
            <News key={i}>
              <NewsHeader>
                <Title>{news.title}</Title>
                <Date>{news.publishedAt}</Date>
              </NewsHeader>
              {/* <p></p> */}

              <Author>{news.author}</Author>
            </News>
          ))
        : null}
    </Container>
  );
};

export default SearchResult;
