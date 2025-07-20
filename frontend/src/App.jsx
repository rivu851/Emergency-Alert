import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Emergency from "./pages/Emergency";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

const App = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Routes>
        <Route path="/" element={<Emergency />} />
        <Route path="/emergency" element={<Emergency />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />
      </Routes>
    </div>
  );
};

export default App;
