import React from "react";
import { Route, Routes } from "react-router-dom";
import { useState } from 'react'
import * as Pages from "./pages";
import { NavBar } from "./components";
import "./App.css";

function App() {
  return (

    <Routes>
      <Route path="/" element={<><NavBar /><Pages.Home /></>}></Route>
      <Route path="/login" element={<><NavBar /><Pages.LoginPage /></>}></Route>
      <Route path="/register" element={<><NavBar /><Pages.RegisterPage /></>}></Route>
      <Route path="/language" element={<><NavBar /><Pages.LanguagePage /></>}></Route>
      <Route path="/difficulty" element={<><NavBar /><Pages.DifficultyPage /></>}></Route>
      <Route path="/game" element={<><NavBar /><Pages.GamePage /></>}></Route>
      <Route path="/completed" element={<><NavBar /><Pages.CompletedPage /></>}></Route>
      <Route path="/dashboard" element={<><NavBar /><Pages.DashboardPage /></>}></Route>
      <Route path="*" element={<><NavBar /><Pages.PageNotFound /></>}></Route>
    </Routes>
 )
}

export default App;






