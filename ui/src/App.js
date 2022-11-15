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
                    navigate("./CeoMain");
                  }}
                  type="button"
                  className="btn btn-dark"
                >
                  사장님로그인
                </button>
                <button
                  onClick={() => {
                    navigate("./CustomerMain");
                  }}
                  type="button"
                  className="btn btn-dark"
                >
                  사용자로그인
                </button>
                <button
                  onClick={() => {
                    axios.get("/api/v1/ceotb").then((data) => {
                      console.log(data);
                    });
                  }}
                >
                  버튼
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
