import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Main from "./routes/Main";
import ResultPage from "./routes/ResultPage";
import TestPage from "./routes/TestPage";

function App() {
  const [Ei, setEI] = useState(0);
  const [SN, setSN] = useState(0);
  const [TF, setRF] = useState(0);
  const [JP, setJP] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/testpage" element={<TestPage />} />
        <Route path="/resultpage" element={<ResultPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
