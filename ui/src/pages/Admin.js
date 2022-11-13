import React from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import admindata from "../admindata";

function Admin() {
  const navigate = useNavigate();
  const [admin] = useState(admindata);
  return (
    <div className="use">
      <div className="text">
        <div className="title">코인 내역 확인</div>
        <div className="explanation">
          현재 보유 코인 <br />
          <br />
          {admin[0].pt} 개
        </div>
      </div>
      <div className="Btn">
        <button onClick={() => {}} type="button" className="btn btn-dark">
          코인충전
        </button>
      </div>
    </div>
  );
}

export default Admin;
