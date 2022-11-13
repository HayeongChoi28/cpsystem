import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { Form, Navbar, Container, Nav } from "react-bootstrap";
import { useState } from "react";
import placedata from "../placedata.js";
import data from "../Ceo_data.js";
import cafe from "../img/cafe.jpg";

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
                    return <Card place={place[i]} i={i} cafe={cafe}></Card>;
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
      <img className="cafeImage" alt="cafeImage" src={props.cafe} width="80%" />
      <h4>{props.place.title}</h4>
      <p>{props.place.content}</p>
      <p>{props.place.location}</p>
    </div>
  );
}

export default CustomerMain;
