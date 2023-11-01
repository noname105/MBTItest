import { useNavigate } from "react-router-dom";

function Main() {
  let navigate = useNavigate();

  return (
    <div>
      <button
        onClick={() => {
          navigate("/testpage");
        }}
      >
        시작하기
      </button>
    </div>
  );
}

export default Main;
