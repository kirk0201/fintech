import React from "react";
import { QRCodeSVG } from "qrcode.react";
import AppBar from "../components/common/AppBar";
import queryString from "query-string";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
function Qrcode() {
  const location = useLocation().search;
  const { fintechUseNum } = queryString.parse(location);
  console.log("fintechUseNum", fintechUseNum);
  return (
    <>
      <AppBar title="QR 코드" />
      <QRBlock>
        <QRCodeSVG size={200} value={fintechUseNum}></QRCodeSVG>
        <p>{fintechUseNum}</p>
      </QRBlock>
    </>
  );
}

const QRBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem;
`;

export default Qrcode;
