import React, { useState } from "react";
import AppBar from "../components/common/AppBar";
import SearchInput from "../components/news/SearchInput";
import SearchResult from "../components/news/SearchResult";

const NewsApiPage = () => {
  const [data, setData] = useState();

  return (
    <>
      <AppBar title="뉴스검색"></AppBar>
      {/* 검색어 입력 컴포넌트 */}
      <SearchInput setData={setData}></SearchInput>
      {/* 검색 결과 출력 컴포넌트 */}
      {/* title만 나오면됨 */}
      <SearchResult data={data}></SearchResult>
    </>
  );
};

export default NewsApiPage;
