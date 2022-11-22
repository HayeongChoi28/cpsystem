import React from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { Form, Navbar, Container, Nav } from "react-bootstrap";
import { useState } from "react";
import placedata from "../placedata.js";
import data from "../Ceo_data.js";

function CustomerMain() {
  let [place] = useState(placedata);
  let [coupon] = useState(data);
  let navigate = useNavigate();
  return (
    <div className="App">
      <div class="nav justify-content-end bg-dark">
        <Navbar expand="lg" variant="dark" bg="dark">
          <Container>
            <Navbar.Brand>보유쿠폰 {coupon[0].cp}개</Navbar.Brand>
          </Container>
        </Navbar>
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
                    return <Card place={place[i]} i={i}></Card>;
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
    <div className="col-md-6">
      <img
        className="cafeImage"
        alt="cafeImage"
        src={"/img/cafe" + props.i + ".jpg"}
        width="80%"
      />
      <h4>{props.place.placeTitle}</h4>
      <p>{props.place.placeContent}</p>
      <p>{props.place.placeLocation}</p>
    </div>
  );
}

export default CustomerMain;
