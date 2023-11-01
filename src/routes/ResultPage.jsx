import { useNavigate } from "react-router-dom";

function ResultPage() {
  let navigate = useNavigate();
  return (
    <div>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        다시하기
      </button>
    </div>
  );
}

export default ResultPage;
