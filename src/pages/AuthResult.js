import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import AppBar from "../components/common/AppBar";
import queryString from "query-string";
import axios from "axios";
function AuthResult() {
  const { code } = queryString.parse(useLocation().search);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState();
  const [accessToken, setAccessToken] = useState("토큰이 없습니다");
  const [userSeqNo, setUserSeqNo] = useState("사용자 번호가 없습니다");
  console.log(code);

  useEffect(() => {
    handleClick();
  }, []);
  const handleClick = () => {
    const sendData = {
      code: code,
      client_id: "92b3af29-b33d-4ec6-b339-d1e4733f14fa",
      client_secret: "f8aba26e-657c-4110-845a-f616b547f875",
      redirect_uri: "http://localhost:3000/authResult",
      grant_type: "authorization_code",
    };
    axios({
      url: "/oauth/2.0/token",
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
      },
      data: queryString.stringify(sendData),
    }).then((res) => {
      if (res.data.rsp_code) {
        console.log(res);
        setError(true);
        setSuccess(false);
      } else {
        console.log(res);
        setData(res);
        setAccessToken(res.data.access_token);
        setUserSeqNo(res.data.user_seq_no);
        localStorage.setItem("accessToken", res.data.access_token);
        localStorage.setItem("userSeqNo", res.data.user_seq_no);
        setSuccess(true);
      }
    });
  };
  console.log(error);
  return (
    <>
      <AppBar title="인증완료"></AppBar>
      <p>인증코드 : {code}</p>
      <button onClick={handleClick}>인증요청 </button>
      {success ? <p style={{ color: "blue" }}>인증완료</p> : null}
      {error ? <p style={{ color: "red" }}>인증실패</p> : null}
      <p>accessToken :{accessToken}</p>
      <p>userSeqNo :{userSeqNo}</p>
    </>
  );
}

export default AuthResult;
