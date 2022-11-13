import React from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { Form, Navbar, Container, Nav } from "react-bootstrap";
import { useState } from "react";
import data from "../data.js";

function Use() {
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
      <div class="use">
        <div class="text">
          <div class="title">쿠폰 사용</div>
          <div class="explanation">
            현재 보유 쿠폰 <br />
            <br />
            {coupon[1].cp} 개
          </div>
          <div class="explanation">
            사용 쿠폰
            <br />
            <br />
            10개
          </div>
        </div>
        <div class="Btn">
          <button
            onClick={() => {
              navigate("/use/finish");
            }}
            type="button"
            class="btn btn-dark"
          >
            확인
          </button>
        </div>
      </div>
    </>
  );
}

export default Use;
