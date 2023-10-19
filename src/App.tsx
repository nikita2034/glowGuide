import React from "react";
import { Route, Routes } from "react-router-dom";
import CosmeticQuizPage from "./pages/CosmeticQuizPage/CosmeticQuizPage";
import RecommendedCosmeticsPage from "./pages/RecommendedCosmeticsPage/RecommendedCosmeticsPage";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<CosmeticQuizPage />} />
        <Route path="/recommendations" element={<RecommendedCosmeticsPage />} />
      </Routes>
    </div>
  );
}

export default App;
