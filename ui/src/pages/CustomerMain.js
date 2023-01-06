import React, { useState, useEffect } from "react";
import { Routes, Route, Link, useNavigate, useParams } from "react-router-dom";
import { Form, Navbar, Container, Nav } from "react-bootstrap";
import placedata from "../placedata.js";
import data from "../data";
import axios from "axios";
import "./Tem.css";

function CustomerMain() {
  let [place] = useState(placedata);
  //const [loading, setLoading] = useState(true);
  let navigate = useNavigate();
  let { custId } = useParams();
  // let { custPw } = useParams();
  let [coupon, setCoupon] = useState(data);
  // const [loginData, setLoginData] = useState({
  //   id: custId,
  //   pw: custPw,
  // });

  const logout = () => {
    console.log(sessionStorage.getItem("cust"));
    sessionStorage.removeItem("cust");
  };
  // useEffect(() => {
  //   console.log(loginData);
  //   axios
  //     .post(`/api/v1/cust/login`, {
  //       custId: loginData.id,
  //       custPw: loginData.pw,
  //     })
  //     .then((response) => {
  //       setCoupon(response.data);
  //     })
  //     .catch(() => console.log("실패함"));
  //   // .finally(() => setLoading(false));
  // }, []);

  useEffect(() => {
    if (custId.length > 0) {
      axios
        .get(`/api/v1/cust/${custId}`)
        .then((response) => {
          setCoupon(response.data);
        })
        .catch(() => console.log("실패함"));
    }
  }, []);

  return (
    <div className="App">
      <div className="Nav">
        <div class="nav justify-content-end bg-warning">
          <Navbar expand="lg" variant="dark" bg="warning">
            <Container>
              <Navbar.Brand>보유쿠폰 {coupon.custPt} 개</Navbar.Brand>
              <Navbar.Brand href="/" onClick={(e) => logout(e)}>
                Logout
              </Navbar.Brand>
            </Container>
          </Navbar>
        </div>
      </div>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="main-bg"></div>
              <div className="container">
                <div className="row">
                  {place.map((a, i) => {
                    return <Card key={i} place={place[i]} i={i}></Card>;
                  })}
                </div>
              </div>
            </>
          }
        />
      </Routes>
    </div>
  );
}

function Card(props) {
  return (
    <div className="col-md-4">
      <div className="store">
        <img
          className="cafeImage"
          alt="cafeImage"
          src={"/img/cafe" + props.i + ".jpg"}
          class="rounded"
          width="100%"
        />
        <div className="detail">
          <h6>{props.place.placeTitle}</h6>
          <h10>{props.place.placeContent}</h10>
          <br />
          <h9>{props.place.placeLocation}</h9>
        </div>
      </div>
    </div >
  );
}

export default CustomerMain;
