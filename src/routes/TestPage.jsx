import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

function TestPage(props) {
  let navigate = useNavigate();

  const [num, setNum] = useState(1);
  const [data] = useState({
    1: {
      ques: "속 시원한 여행에 떠나보고 싶은 날, 당신의 행동은?",
      ans1: "친구나 가족과 함께 다녀오고 싶다.",
      ans2: "혼자 가서 여유롭게 즐기고 싶다.",
    },
    2: {
      ques: "새로운 사람들과의 소극적인 소통에 대한 당신의 태도는?",
      ans1: "적극적으로 대화를 시도한다.",
      ans2: "처음에는 조용하게 지켜보는 편이다.",
    },
    3: {
      ques: "스트레스를 받을 때, 당신이 선택하는 휴식 방법은?",
      ans1: "친구들과 함께 무엇인가를 하면서 스트레스를 푼다.",
      ans2: "혼자 조용한 곳에서 시간을 보낸다.",
    },
    4: {
      ques: "새로운 도시를 여행할 때, 당신이 먼저 탐험하는 것은?",
      ans1: "지도와 길 안내를 철저히 확인한다.",
      ans2: "그냥 걷다가 눈에 띄는 것을 따라간다.",
    },
    5: {
      ques: "문제 해결할 때, 당신의 방식은?",
      ans1: "구체적이고 실질적인 해결책을 찾는다.",
      ans2: "다양한 관점을 고려하며 창의적인 해결책을 찾는다.",
    },
    6: {
      ques: "미래에 대한 계획을 세울 때, 당신이 주로 고려하는 것은?",
      ans1: "현재의 상황과 실제 가능성에 기반한다.",
      ans2: "미래의 가능성과 기회를 고려한다.",
    },
    7: {
      ques: "친구에게 조언을 할 때, 당신의 접근은?",
      ans1: "논리적으로 상황을 분석하고 조언을 해준다.",
      ans2: "감정을 먼저 듣고 공감하며 조언을 해준다.",
    },
    8: {
      ques: "의사 결정을 할 때, 당신은 어떤 요소를 중요하게 생각하는가?",
      ans1: "객관적인 사실과 논리적인 분석을 중요하게 생각한다.",
      ans2: "사람들의 감정과 가치관을 중요하게 생각한다.",
    },
    9: {
      ques: "갈등 상황에서, 당신의 태도는?",
      ans1: "문제를 논리적으로 해결하려고 한다.",
      ans2: "감정적인 해결책을 찾으려고 한다.",
    },
    10: {
      ques: "여행 계획을 세울 때, 당신의 스타일은?",
      ans1: "계획을 세우고 미리 일정을 정해놓는다.",
      ans2: "계획을 유연하게 바꿀 수 있도록 여유를 둔다.",
    },
    11: {
      ques: "놀이공원에 가서 먼저 뭘 탈 건가요?",
      ans1: "미리 정한 놀이기구부터 탄다.",
      ans2: "그때그때 기분에 따라 탄다.",
    },
    12: {
      ques: "일정을 따라가다가 갑자기 예상치 못한 사건으로 계획이 꼬일 때, 당신의 반응은?",
      ans1: "빨리 대처해서 원래대로 돌아가려고 노력한다.",
      ans2: "상황을 받아들이며 새로운 계획을 세운다.",
    },
  });

  return (
    <div>
      <div>Q: {data[num].ques}</div>
      <button
        onClick={() => {
          setNum(num + 1);
          if (num <= 3) {
            props.setEI(props.EI + 1);
          } else if (num >= 4 && num <= 6) {
            props.setSN(props.SN + 1);
          } else if (num >= 7 && num <= 9) {
            props.setTF(props.TF + 1);
          } else if (num >= 10 && num <= 12) {
            props.setJP(props.JP + 1);
          }
          if (num === 12) {
            navigate("/resultpage");
          }
        }}
      >
        {data[num].ans1}
      </button>
      <button
        onClick={() => {
          setNum(num + 1);
          if (num <= 3) {
            props.setEI(props.EI - 1);
          } else if (num >= 4 && num <= 6) {
            props.setSN(props.SN - 1);
          } else if (num >= 7 && num <= 9) {
            props.setTF(props.TF - 1);
          } else if (num >= 10 && num <= 12) {
            props.setJP(props.JP - 1);
          }
          if (num === 12) {
            navigate("/resultpage");
          }
        }}
      >
        {data[num].ans2}
      </button>
    </div>
  );
}
export default TestPage;
