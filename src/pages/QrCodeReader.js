import React, { useState } from "react";
import AppBar from "../components/common/AppBar";
import { QrReader } from "react-qr-reader";
import Modal from "react-modal";
import ModalWithdraw from "../components/withdraw/ModalWithDraw";
import { useNavigate } from "react-router-dom";
const QrCodeReaderPage = () => {
  const [result, setResult] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const navigation = useNavigate();
  const handleScan = (result, error) => {
    if (!!result) {
      console.log(result);
      setResult(result?.text);
      setOpenModal(true);
    }
    if (!!error) {
    }
  };
  const closeModal = () => {
    setOpenModal(false);
  };
  return (
    <>
      <AppBar title={"QR 리더"} />
      <div
        style={{
          margin: "0 auto",
        }}
      >
        <QrReader
          videoStyle={{
            width: "300px",
            left: 100,
          }}
          onResult={handleScan}
        />
      </div>
      <p>{result}</p>
      <Modal
        isOpen={openModal}
        style={CustomStyles}
        onRequestClose={closeModal}
      >
        <span
          style={{
            cursor: "pointer",
          }}
          onClick={() => navigation("/mainpage")}
        >
          &larr;
        </span>
        결제 계좌 선택
        <ModalWithdraw tofintechnum={result}></ModalWithdraw>
      </Modal>
    </>
  );
};

const CustomStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    zIndex: "9",
  },
  content: {
    width: "95%",
    border: `0 solid black`,
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    zIndex: "99999",
  },
};
export default QrCodeReaderPage;
