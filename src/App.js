import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";

import Main from "./routes/Main";
import ResultPage from "./routes/ResultPage";
import TestPage from "./routes/TestPage";

function App() {
  const [EI, setEI] = useState(0);
  const [SN, setSN] = useState(0);
  const [TF, setTF] = useState(0);
  const [JP, setJP] = useState(0);

  const [datas, setDatas] = useState();
  const [MBTI, setMBTI] = useState();

  useEffect(() => {
    let data = [];
    if (EI > 0) {
      data.push("E");
    } else if (EI < 0) {
      data.push("I");
    }
    if (SN > 0) {
      data.push("S");
    } else {
      data.push("N");
    }
    if (TF > 0) {
      data.push("T");
    } else {
      data.push("F");
    }
    if (JP > 0) {
      data.push("J");
    } else {
      data.push("P");
    }
    setDatas(data.join(""));
    setMBTI(datas);
  }, [EI, SN, TF, JP, datas]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Main setEI={setEI} setSN={setSN} setTF={setTF} setJP={setJP} />
          }
        />
        <Route
          path="/testpage"
          element={
            <TestPage
              setEI={setEI}
              setSN={setSN}
              setTF={setTF}
              setJP={setJP}
              MBTI={MBTI}
              setMBTI={setMBTI}
              setDatas={setDatas}
              datas={datas}
              EI={EI}
              SN={SN}
              TF={TF}
              JP={JP}
            />
          }
        />
        <Route path="/resultpage" element={<ResultPage MBTI={MBTI} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
