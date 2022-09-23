import React from "react";
import { Route, Routes } from "react-router-dom";
import { useState } from 'react'
import * as Pages from "./pages";
import "./App.css";

function App() {
  return (

    <Routes>
      <Route path="/" element={<><Pages.Navbar /><Pages.Home /></>}></Route>
      <Route path="/login" element={<><Pages.Navbar /><Pages.LoginPage /></>}></Route>
      <Route path="/register" element={<><Pages.Navbar /><Pages.RegisterPage /></>}></Route>
      <Route path="/language" element={<><Pages.Navbar /><Pages.LanguagePage /></>}></Route>
      <Route path="/difficulty" element={<><Pages.Navbar /><Pages.DifficultyPage /></>}></Route>
      <Route path="/game" element={<><Pages.Navbar /><Pages.GamePage /></>}></Route>
      <Route path="/completed" element={<><Pages.Navbar /><Pages.CompletedPage /></>}></Route>
      <Route path="/dashboard" element={<><Pages.Navbar /><Pages.DashboardPage /></>}></Route>
      <Route path="*"></Route>
    </Routes>
 )
}

export default App;






