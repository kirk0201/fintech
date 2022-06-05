import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 2rem 0;
`;

const SearchInput = ({ setData }) => {
  const [word, setWord] = useState();
  const handleChange = (e) => {
    const { value } = e.target;
    setWord(value);
  };
  const handleClick = () => {
    axios({
      url: `https://newsapi.org/v2/everything?q=${word}&from=2022-05-18&sortBy=popularity&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`,
      method: "GET",
    })
      .then((res) => {
        setData(res.data.articles);
        console.log(res);
      })
      .then(() => console.log("데이터가 정상적으로 받아졌습니다."))
      .catch((error) => console.log(error));
  };
  return (
    <Container>
      <input type="text" onChange={handleChange}></input>
      <button onClick={handleClick}>검색</button>
    </Container>
  );
};

export default SearchInput;
