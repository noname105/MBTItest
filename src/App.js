import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from "react";

import Main from "./routes/Main";
import ResultPage from "./routes/ResultPage";
import TestPage from "./routes/TestPage";

function App() {
  const [EI, setEI] = useState(0);
  const [SN, setSN] = useState(0);
  const [TF, setTF] = useState(0);
  const [JP, setJP] = useState(0);

  const [MBTI, setMBTI] = useState();

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
              EI={EI}
              SN={SN}
              TF={TF}
              JP={JP}
            />
          }
        />
        <Route path="/resultpage" element={<ResultPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
