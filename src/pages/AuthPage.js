import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Api from "../api/Api";
import AppBar from "../components/common/AppBar";

const AuthButton = styled.button`
  display: block;
  border: 1px dotted #000;
  background-color: #282c34;
  color: white;
  text-align: center;
`;

const AuthPage = () => {
  const [api, { loading, data, error }] = Api(
    `https://newsapi.org/v2/everything?q="삼성"&from=2022-05-18&sortBy=popularity&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`
  );
  const handleAuthButtonClick = () => {
    const clientId = process.env.REACT_APP_CLIENT_ID;
    // ****** 여러분들의 clientId 입력해주세요 ******
    const authPageUrl = `https://testapi.openbanking.or.kr/oauth/2.0/authorize?response_type=code&client_id=${clientId}&redirect_uri=http://localhost:3000/authResult&scope=login inquiry transfer&state=12345678901234567890123456789012&auth_type=0`;
    //새창으로 인증사이트를 오픈
    window.open(authPageUrl, "_blank");

    //팝업으로 인증사이트를 오픈
    // window.open(
    //   authPageUrl,
    //   "window_name",
    //   "width=430,height=500, left=50,location=no,status=no,scrollbars=yes"
    // );
  };
  const navigate = useNavigate();
  return (
    <>
      <AppBar title={"사용자 인증"}></AppBar>
      <AuthButton onClick={handleAuthButtonClick}>사용자 인증</AuthButton>
      <AuthButton onClick={() => navigate("/mainpage")}>메인페이지</AuthButton>
    </>
  );
};

export default AuthPage;
