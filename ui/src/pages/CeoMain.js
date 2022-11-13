import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Form, Navbar, Container, Nav } from "react-bootstrap";
import data from "../data";

function CeoMain() {
  const navigate = useNavigate();
  const [checkId, setcheckId] = useState("");
  const [coupon] = useState(data);
  const message = "다시 입력해주세요";

  return (
    <>
      <div className="nav justify-content-end bg-dark">
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
          onClick={(e) => {
            setcheckId(e.target.value);
            console.log(checkId);
          }}
          type="text"
          size="40"
        />
      </div>
      <div className="Btn">
        <button
          onClick={() => {
            navigate("/choose");
            // <idCheck
            //   checkId={checkId}
            //   coupon={coupon}
            //   navigate={navigate}
            //   message={message}
            // />;
            // alert(message);
          }}
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
