import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";

const ModalCardBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.5rem;
  padding: 20px;
  border: 1px #112211 solid;
`;
const CardTitle = styled.div`
  font-size: 1rem;
  color: black;
`;
const FintechUseNo = styled.div`
  font-size: 0.7rem;
  margin-bottom: 30px;
`;

const WithDrawButton = styled.button`
  border: none;
  padding: 0.3rem;
  background: #2aa450;
  color: white;
  margin-top: 0.3rem;
`;

const ModalCard = ({ bankName, fintechUseNum, tofintechnum }) => {
  const [amount, setAmount] = useState();
  const [data, setData] = useState();
  const [deposit, setDeposit] = useState();
  const genTransId = () => {
    let countnum = Math.floor(Math.random() * 1000000000) + 1;
    let transId = "M202200992" + "U" + countnum; //이용기관번호 본인것 입력
    console.log(transId);
    return transId;
  };

  const handleChange = (e) => {
    const { value } = e.target;
    console.log(value);
    setAmount(value);
  };
  const handlePayButtonClick = () => {
    // wokB출금 이체
    axios({
      url: "v2.0/transfer/withdraw/fin_num",
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
        Authorization: `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`,
      },
      data: {
        bank_tran_id: genTransId(),
        cntr_account_type: "N",
        cntr_account_num: "3038020419219",
        dps_print_content: "이용료(김재현)",
        fintech_use_num: fintechUseNum,
        tran_amt: amount,
        tran_dtime: "20220520131755",
        req_client_fintech_use_num: tofintechnum,
        req_client_name: "김재현",
        req_client_num: "M202200992",
        transfer_purpose: "TR",
        recv_client_name: "김재현",
        recv_client_bank_code: "097",
        recv_client_account_num: "3038020419219",
      },
    }).then((res) => {
      console.log(res);
      setData(res);
    });
  };
  const handleDeposit = () => {
    const twoLeggedToken = process.env.REACT_APP_2LEGGED;
    const sendData = {
      cntr_account_type: "N",
      cntr_account_num: "3038020419219",
      wd_pass_phrase: "NONE",
      wd_print_content: "환불금액",
      name_check_option: "off",
      tran_dtime: "20220510101921",
      req_cnt: "1",
      req_list: [
        {
          tran_no: "1",
          bank_tran_id: genTransId(),
          fintech_use_num: tofintechnum,
          print_content: "쇼핑몰환불",
          tran_amt: amount,
          req_client_fintech_use_num: fintechUseNum,
          req_client_name: "김재현",
          req_client_num: "HONGGILDONG1234",
          transfer_purpose: "TR",
        },
      ],
    };

    axios({
      url: "v2.0/transfer/deposit/fin_num",
      method: "POST",
      data: sendData,
      headers: {
        Authorization: `Bearer ${twoLeggedToken}`,
        "Content-Type": "application/json; charset=UTF-8",
      },
    }).then((res) => {
      console.log(res);
      setDeposit(res);
    });
  };
  return (
    <ModalCardBlock>
      <CardTitle>{bankName}</CardTitle>
      <FintechUseNo>{fintechUseNum}</FintechUseNo>
      <p>{tofintechnum}에 출금이체를 발생시킵니다.</p>
      <input onChange={handleChange}></input>
      <WithDrawButton onClick={handlePayButtonClick}>결제하기</WithDrawButton>
      <button onClick={handleDeposit}>deposit</button>
    </ModalCardBlock>
  );
};

export default ModalCard;
