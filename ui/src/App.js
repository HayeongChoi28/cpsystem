import React, { useEffect } from "react";
import { Form, Navbar, Container, Nav } from "react-bootstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import CeoMain from "./pages/CeoMain";
import CustomerMain from "./pages/CustomerMain";
import Choose from "./pages/Choose";
import Save from "./pages/Save";
import SaveFin from "./pages/SaveFin";
import Use from "./pages/Use";
import UseFin from "./pages/UseFin";
// import data from "./data";
import Admin from "./pages/Admin";
import Checkpw from "./pages/Checkpw";
import axios from "axios";

function App() {
  const navigate = useNavigate();

  // const custhandleLogin = () => {
  //   axios
  //     .post("/api/v1/cust/login", {
  //       ceoId: "a-ceo",
  //       ceoPw: "12345",
  //     })
  //     .then((response) => {
  //       console.log(response.data);
  //       navigate("/CustomerMain");
  //     });
  // };
  // const custhandleLogin = () => {
  //   axios
  //     .post("/api/v1/ceo/login", {
  //       custId: "a-ceo",
  //       custPw: "12345",
  //     })
  //     .then((response) => {
  //       console.log(response.data);

  //       if (response.data.ceoPt >= 10) {
  //         navigate("/use");
  //       } else {
  //         navigate("/save");
  //       }
  //     });
  // };
  return (
    <>
      <div className="nav justify-content-end bg-dark">
        <Navbar expand="lg" variant="dark" bg="dark">
          <Container>
            <Navbar.Brand href="/">Coupon</Navbar.Brand>
          </Container>
        </Navbar>
      </div>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="text">
                <div className="title">로그인</div>
                <div className="explanation">
                  아이디
                  <br />
                  <br />
                  <input type="text" size="20" />
                  <br />
                  <br />
                  비밀번호
                  <br />
                  <br />
                  <input type="text" size="20" />
                  <br />
                  <br />
                </div>
              </div>

              <div className="Btn">
                <button
                  onClick={() => {
                    // 가현 : id, pw 체크 후 맞으면 ceoMain으로 넘어가게
                    navigate("./CeoMain");
                  }}
                  // onClick={custhandleLogin}
                  type="button"
                  className="btn btn-dark"
                >
                  사장님로그인
                </button>
                <button
                  onClick={() => {
                    //id, pw 체크 후 맞으면 customerMain으로 넘어가게
                    navigate("./CustomerMain");
                  }}
                  type="button"
                  className="btn btn-dark"
                >
                  사용자로그인
                </button>
              </div>
            </>
          }
        />
        <Route path="/ceomain" element={<CeoMain />} />
        <Route path="/customermain" element={<CustomerMain />} />
        <Route path="/checkpw" element={<Checkpw />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/choose" element={<Choose />} />
        <Route path="/save" element={<Save />} />
        <Route path="/save/finish" element={<SaveFin />} />
        <Route path="/use" element={<Use />} />
        <Route path="/use/finish" element={<UseFin />} />
        <Route path="*" element={<div>404error</div>} />
      </Routes>
    </>
  );
}

export default App;
