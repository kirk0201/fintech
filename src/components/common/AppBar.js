import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid transparent;
  color: white;
  background-color: #282c34;
  margin-bottom: 1rem;
  padding: 20px 0;
`;
const Title = styled.span`
  font-size: 3rem;

  font-weight: 700;
`;
const Back = styled.span`
  display: flex;
  font-size: 3rem;
  padding: 0 0.7rem;
  border: 1px solid transparent;
  border-radius: 50%;
  cursor: pointer;
`;
const Menu = styled.button`
  color: black;
  margin: 0 1rem;
`;
const AppBar = ({ title }) => {
  const navigate = useNavigate();
  const location = useLocation();

  console.log(location);
  const backLocation = () => {
    if (location.pathname === "/mainpage") navigate("/");
    if (location.pathname === "/balance") navigate("/mainpage");
    if (location.pathname === "/qrreader") navigate("/mainpage");
  };
  return (
    <Header>
      <Back onClick={backLocation}>&larr;</Back>
      <Title>{title}</Title>
      <Menu>메뉴</Menu>
    </Header>
  );
};

export default AppBar;
