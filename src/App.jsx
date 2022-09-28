import React from "react";
import { Route, Routes } from "react-router-dom";
import { useUserContext } from './Context';
import { useEffect, useState } from "react";
import axios from 'axios';
import * as Pages from "./pages";
import { NavBar } from "./components";

import "./App.css";

function App() {
  const [name, setName] = useState();

  const { getCurrentUser, userLoading } = useUserContext();
  useEffect(() => {
    getCurrentUser();
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Pages.Home />}></Route>
      <Route path="/login" element={<Pages.LoginPage />}></Route>
      <Route path="/register" element={<Pages.RegisterPage />}></Route>
      <Route path="/dashboard" element={<Pages.DashboardPage />}></Route>
      <Route path="/language" element={<Pages.LanguagePage />}></Route>
      <Route path="/game" element={<Pages.GamePage />}></Route>
      <Route path="/completed" element={<Pages.CompletedPage />}></Route>
      <Route path="/difficulty" element={<Pages.DifficultyPage />}></Route>
      <Route path="*" element={<Pages.PageNotFound />}></Route>
    </Routes>
  );
}

export default App;
