import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";

function ResultPage(props) {
  const whatMBTI = props.MBTI;
  const [res, setRes] = useState("");

  let navigate = useNavigate();

  useEffect(() => {
    if (whatMBTI) {
      setRes(whatMBTI);
    }
  }, [whatMBTI]);

  let data = {
    ISTJ: {
      img: "../assets/images/야스오(ISTJ).png",
      subtitle: "설명1",
      cont1: "설명2",
      cont2: "설명3",
    },
    ISFJ: {
      img: "../assets/images/야스오(ISTJ).png",
      subtitle: "설명1",
      cont1: "설명2",
      cont2: "설명3",
    },
    ISTP: {
      img: "../assets/images/야스오(ISTJ).png",
      subtitle: "설명1",
      cont1: "설명2",
      cont2: "설명3",
    },
    ISFP: {
      img: "../assets/images/야스오(ISTJ).png",
      subtitle: "설명1",
      cont1: "설명2",
      cont2: "설명3",
    },
    INFJ: {
      img: "../assets/images/야스오(ISTJ).png",
      subtitle: "설명1",
      cont1: "설명2",
      cont2: "설명3",
    },
    INTJ: {
      img: "../assets/images/야스오(ISTJ).png",
      subtitle: "설명1",
      cont1: "설명2",
      cont2: "설명3",
    },
    INFP: {
      img: "../assets/images/야스오(ISTJ).png",
      subtitle: "설명1",
      cont1: "설명2",
      cont2: "설명3",
    },
    INTP: {
      img: "../assets/images/야스오(ISTJ).png",
      subtitle: "설명1",
      cont1: "설명2",
      cont2: "설명3",
    },
    ESTP: {
      img: "../assets/images/야스오(ISTJ).png",
      subtitle: "설명1",
      cont1: "설명2",
      cont2: "설명3",
    },
    ESFP: {
      img: "../assets/images/야스오(ISTJ).png",
      subtitle: "설명1",
      cont1: "설명2",
      cont2: "설명3",
    },
    ESTJ: {
      img: "../assets/images/야스오(ISTJ).png",
      subtitle: "설명1",
      cont1: "설명2",
      cont2: "설명3",
    },
    ESFJ: {
      img: "../assets/images/야스오(ISTJ).png",
      subtitle: "설명1",
      cont1: "설명2",
      cont2: "설명3",
    },
    ENFP: {
      img: "../assets/images/야스오(ISTJ).png",
      subtitle: "설명1",
      cont1: "설명2",
      cont2: "설명3",
    },
    ENTP: {
      img: "../assets/images/야스오(ISTJ).png",
      subtitle: "설명1",
      cont1: "설명2",
      cont2: "설명3",
    },
    ENFJ: {
      img: "../assets/images/야스오(ISTJ).png",
      subtitle: "설명1",
      cont1: "설명2",
      cont2: "설명3",
    },
    ENTJ: {
      img: "../assets/images/야스오(ISTJ).png",
      subtitle: "설명1",
      cont1: "설명2",
      cont2: "설명3",
    },
  };

  return (
    <div>
      {res && (
        <>
          <div>
            <img src={data[res].img} alt="MBTI결과 챔피언" />
          </div>
          <div>
            <div>{data[res].subtitle}</div>
            <div>{data[res].cont1}</div>
            <div>{data[res].cont2}</div>
          </div>
          <div>
            <button
              onClick={() => {
                navigate("/");
              }}
            >
              다시하기
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default ResultPage;
