import React, { useEffect, useState } from "react";
import AppBar from "../components/common/AppBar";
import axios from "axios";
import styled from "styled-components";
import MainCard from "../components/main/MainCard";
import { useNavigate } from "react-router-dom";

function MainPage() {
  const accessToken = localStorage.getItem("accessToken");
  const userSeqNo = localStorage.getItem("userSeqNo");
  const [accountList, setAccountList] = useState();
  const navigation = useNavigate();
  console.log(accessToken, userSeqNo);

  useEffect(() => {
    getUserAccountList();
  }, []);
  const getUserAccountList = () => {
    const sendData = {
      user_seq_no: userSeqNo,
    };
    axios({
      url: "v2.0/user/me",
      method: "get",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: sendData,
    }).then((res) => {
      setAccountList(res.data.res_list);
      console.log(res);
    });
  };
  return (
    <>
      <AppBar title={"메인페이지"}></AppBar>
      <AuthButton onClick={() => navigation("/qrreader")}>QR Reader</AuthButton>
      {/* fintech_use_no 을 반복문을 통해 출력 */}
      {accountList
        ? accountList.map((li, i) => (
            <div key={i}>
              <MainCard
                bankName={li.bank_name}
                fintechUseNum={li.fintech_use_num}
              />
            </div>
          ))
        : null}
    </>
  );
}
const BankCard = styled.div`
  display: flex;
  justify-content: center;
  border: 1px solid black;
  width: 100%;
  align-items: center;
`;
const AuthButton = styled.button`
  display: block;
  border: 1px dotted #000;
  background-color: #282c34;
  color: white;
  text-align: center;
`;

export default MainPage;
