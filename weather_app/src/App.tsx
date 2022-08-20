import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { MonthStatistics } from "./pages/MonthStatistics/MonthStatistics";
import { Header } from "./shared/Header";

function App() {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/MonthStatistics" element={<MonthStatistics />}></Route>
      </Routes>
    </div>
  );
}

export default App;
