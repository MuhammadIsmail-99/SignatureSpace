import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home/home";
import PropertyDetails from "./PropertyDetails/page.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/property" element={<PropertyDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
