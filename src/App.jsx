import "./App.css";
import HomePage from "./components/CenterElement/HomePage/homepage";
import AboutPage from "./components/CenterElement/AboutPage/aboutpage";
import Contactpage from "./components/CenterElement/Contactpage/contactpage";
import SideBar from "./components/CenterElement/SideBar/SideBar";
import { Route, Routes } from "react-router-dom";
import React from "react";

function App() {
  return (
    <div className='flex'>
      <SideBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<Contactpage />} />
      </Routes>
    </div>
  );
}

export default App;
