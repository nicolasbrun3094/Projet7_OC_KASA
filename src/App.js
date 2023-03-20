import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Error from "./pages/Error/Error";
import HousingRecord from "./pages/HousingRecord/HousingRecord";

const App = () => {
  return (
    // ---- Englobe toutes les routes ---- //
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/housingRecord/:id" element={<HousingRecord />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
