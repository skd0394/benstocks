import React from "react";
import { Route,Routes } from "react-router-dom";
import Home from "./pages/Home";
import Stock from "./pages/stock";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/stock" element={<Stock />} />
    </Routes>
  );
};

export default AllRoutes;
