import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { Form, Navbar, Container, Nav } from "react-bootstrap";
import { useState } from "react";
import data from "../data.js";

function SaveFin() {
  let navigate = useNavigate();
  let [coupon] = useState(data);
  return (
    <>
      <div class="nav justify-content-end bg-dark">
        <Navbar expand="lg" variant="dark" bg="dark">
          <Container>
            <Navbar.Brand href="/checkpw">Admin</Navbar.Brand>
          </Container>
        </Navbar>
      </div>
      <div class="title">적립되었습니다</div>
      <div class="title">현재 보유 쿠폰은 {coupon[0].cp}개 입니다</div>
      <div class="Btn">
        <button
          onClick={() => {
            navigate("/");
          }}
          type="button"
          class="btn btn-dark"
        >
          확인
        </button>
      </div>
    </>
  );
}

export default SaveFin;
