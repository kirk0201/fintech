import React, { useState } from "react";
import AppBar from "../components/common/AppBar";
import axios from "axios";
function AxiosTest() {
  const [data, setData] = useState();
  const handleClick = () => {
    axios({
      method: "get",
      url: "https://newsapi.org/v2/everything?q=Apple&from=2022-05-18&sortBy=popularity&apiKey=826672e66fd6491fad2aa3fc33438a34",
    }).then((data) => {
      setData(data);
      console.log(data);
    });
  };
  return (
    <div>
      <AppBar title={"통신테스트"} />
      <button onClick={handleClick}>데이터 Request요청</button>
      <p>{data}</p>
    </div>
  );
}

export default AxiosTest;
