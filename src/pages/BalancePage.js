import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import queryString from "query-string";

import BalanceCard from "../components/balance/BalanceCard";
import AppBar from "../components/common/AppBar";
import axios from "axios";
import Price from "../components/common/price";
import TransactionList from "../components/balance/TransactionList";

const BalancePage = () => {
  const { fintechUseNum } = queryString.parse(useLocation().search);
  const [data, setData] = useState();
  const [transactionList, setTransactionList] = useState();
  //잔액 저장 스테이트
  useEffect(() => {
    getBalance();
    getDataList();
  }, []);

  const genTransId = () => {
    let countnum = Math.floor(Math.random() * 1000000000) + 1;
    let transId = "M202200992" + "U" + countnum; //이용기관번호 본인것 입력
    console.log(transId);
    return transId;
  };

  const getBalance = () => {
    const sendPrams = {
      bank_tran_id: genTransId(),
      fintech_use_num: fintechUseNum,
      tran_dtime: "20220519023612",
    };
    //계좌 잔액 조회 API 호출
    axios({
      url: "v2.0/account/balance/fin_num",
      method: "get",
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`,
      },
      params: sendPrams,
    }).then((res) => {
      setData(res.data);
      console.log(res.data);
    });
  };
  const getDataList = () => {
    const sendPrams = {
      bank_tran_id: genTransId(),
      fintech_use_num: fintechUseNum,
      inquiry_type: "A",
      inquiry_base: "D",
      from_date: "20220101",
      to_date: "20220519",
      sort_order: "D",
      tran_dtime: "20220519155640",
    };
    axios({
      url: "v2.0/account/transaction_list/fin_num",
      method: "get",
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`,
      },
      params: sendPrams,
    }).then((res) => {
      console.log("거래내역", res);
      setTransactionList(res.data.res_list);
    });
  };

  return (
    <>
      <AppBar title={"잔액조회"} />
      <BalanceCard
        bankName={data ? data.bank_name : undefined}
        fintechNum={data ? data.fintech_use_num : undefined}
        balance={data ? Price(data.balance_amt) : undefined}
      ></BalanceCard>
      {transactionList ? (
        <TransactionList transactionList={transactionList} />
      ) : null}
    </>
  );
};

export default BalancePage;
