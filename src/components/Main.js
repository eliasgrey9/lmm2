import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Home/Home";

function Main() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default Main;
