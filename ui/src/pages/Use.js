import React, { useEffect } from "react";
import { Routes, Route, Link, useNavigate, useParams } from "react-router-dom";
import { Form, Navbar, Container, Nav } from "react-bootstrap";
import { useState } from "react";
import data from "../data.js";
import axios from "axios";

function Use() {
  let navigate = useNavigate();
  let [coupon] = useState(data);
  let { custId } = useParams();

  useEffect(() => {
    if (custId.length > 0) {
      axios
        .get(`/api/v1/cust/${custId}`)
        .then((response) => {
          console.log(response.data);
        })
        .catch(() => console.log("실패함"));
      }
  }, [])
  
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
