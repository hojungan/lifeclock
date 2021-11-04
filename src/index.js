import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Help from "./help";
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <header>
      <h1>Life Clock</h1>
    </header>
    <main>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/help" element={<Help />} />
      </Routes>
    </main>
  </BrowserRouter>,
  document.getElementById("root")
);
