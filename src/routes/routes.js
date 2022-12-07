import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Box } from "@mui/system";
// import Contact from "../Pages/Contact/Contact";
import Contact from '../../src/Pages/Contact/Contact'
import Doctors from '../../src/Pages/Doctors/Doctors'
// import Futter from '../../src/components/Futter/Futter'
import About from "../../src/Pages/about";
import Depart from "../../src/Pages/depart";
import Galary from "../../src/Pages/galary";
import Home from "../../src/Pages/Home/Home";
import Make from "../../src/Pages/make";
import Servise from "../../src/Pages/servise";
import Test from "../../src/Pages/test";
const Router = () => {
  return (
    <Box id='#app'>
      <Home />
      <About />
      <Servise />
      <Make />
      <Depart />
      <Test />
      <Doctors />
      {/* <Galary /> */}
      <Contact />
    </Box>

  );
};

export default Router;
