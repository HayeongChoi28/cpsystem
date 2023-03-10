import React, { useEffect } from "react";
import { Routes, Route, Link, useNavigate, useParams } from "react-router-dom";
import { Form, Navbar, Container, Nav } from "react-bootstrap";
import { useState } from "react";
import data from "../data";
import axios from "axios";

function SaveFin() {
  let navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  let [coupon, setCoupon] = useState(data);

  let { custId } = useParams();

  useEffect(() => {
    if (custId.length > 0) {
      axios
        .get(`/api/v1/cust/${custId}`)
        .then((response) => {
          setCoupon(response.data);
        })
        .catch(() => console.log("실패함"))
        .finally(() => setLoading(false));
    }
  }, []);

  return (
    <>
      <div className="Nav">
        <div class="nav justify-content-end bg-primary">
          <Navbar expand="lg" variant="dark" bg="primary">
            <Container>
              <Navbar.Brand>Coupon</Navbar.Brand>
            </Container>
          </Navbar>
        </div>
      </div>
      {loading ? (
        <div>...loading</div>
      ) : (
        <>
          <div class="title">적립되었습니다</div>
          <div class="title">현재 보유 쿠폰은 {coupon.custPt}개 입니다</div>
          <div class="Btn">
            <button
              onClick={() => {
                navigate(`/ceomain/${custId}`);
              }}
              type="button"
              class="btn btn-primary"
            >
              확인
            </button>
          </div>
        </>
      )}
    </>
  );
}

export default SaveFin;
