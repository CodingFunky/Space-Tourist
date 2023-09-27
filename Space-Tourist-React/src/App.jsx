// import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar.jsx";
import Destination from "./destination-moon.jsx";
import "./App.css";
import Home from "./components/home/home.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<>Page Not Found</>} />
      </Routes>
    </>
  );
}

export default App;
