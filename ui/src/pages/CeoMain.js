import React from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Form, Navbar, Container, Nav } from "react-bootstrap";
import data from "../data";
import axios from "axios";

function CeoMain() {
  const navigate = useNavigate();
  // const [checkId, setcheckId] = useState("");
  // const [coupon] = useState(data);
  // const message = "다시 입력해주세요";
  const custhandleLogin = () => {
    axios
      .post("api/v1/cust/login", { custId: "a" })
      .then((response) => {
        console.log(response.data);
        if (response.data.custPt >= 10) {
          navigate("/use");
        } else {
          navigate("/save");
        }
      })
      .catch(() => console.log("실패함"));
  };

  return (
    <>
      {/* <div className="ontent-end bg-dark">
        <Navbar expand="lg" variant="dark" bg="dark">
          <Container>
            <Navbar.Brand
              href="/checkpw"
              style={"display: flex; justify-content: flex-end"}
            >
              Admin
            </Navbar.Brand>
          </Container>
        </Navbar>
      </div> */}
      <div class="nav justify-content-end bg-dark">
        <Navbar expand="lg" variant="dark" bg="dark">
          <Container>
            <Navbar.Brand href="/checkpw">Admin</Navbar.Brand>
          </Container>
        </Navbar>
      </div>
      <div className="title">쿠폰 적립</div>
      <div className="explanation">쿠폰 적립을 위해 번호를 입력해 주세요</div>
      <div className="phoneNumber">
        <input
          // onClicke={(e) => {
          // setcheckId(e.target.value);
          // console.log(checkId);
          // }}
          type="text"
          size="40"
        />
      </div>
      <div className="Btn">
        <button
          onClick={custhandleLogin}
          type="button"
          className="btn btn-dark"
        >
          확인
        </button>
      </div>
    </>
  );
}

// function idCheck(props) {
//   var checkId = props.checkId;
//   console.log(props.coupon[0].id);

//   switch (checkId) {
//     case props.coupon[0].id:
//       return props.navigate("/choose");
//     case props.coupon[1].id:
//       return props.navigate("/choose");
//     default:
//       return alert(props.message);
//   }
// }

export default CeoMain;
