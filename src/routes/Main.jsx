import { useNavigate } from "react-router-dom";
import React from "react";

function Main(props) {
  let navigate = useNavigate();

  return (
    <div>
      <button
        onClick={() => {
          navigate("/testpage");
          props.setEI(0);
          props.setSN(0);
          props.setTF(0);
          props.setJP(0);
        }}
      >
        시작하기
      </button>
    </div>
  );
}

export default Main;
