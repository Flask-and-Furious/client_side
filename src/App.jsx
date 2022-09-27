import React from "react";
import { Route, Routes } from "react-router-dom";

import * as Pages from "./pages";
import PrivateRoutes from "./utils/PrivateRoutes";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Pages.Home />}></Route>
      <Route path="/login" element={<Pages.LoginPage />}></Route>
      <Route path="/register" element={<Pages.RegisterPage />}></Route>

      {/* restricted access */}
      <Route element={<PrivateRoutes />}>
        <Route path="/dashboard" element={<Pages.DashboardPage />} />
        <Route path="/language" element={<Pages.LanguagePage />} />
        <Route path="/game" element={<Pages.GamePage />} />
        <Route path="/completed" element={<Pages.CompletedPage />} />
      </Route>

      <Route path="*" element={<Pages.PageNotFound />}></Route>

      {/* <Route path="/difficulty" element={<Pages.DifficultyPage />}></Route> */}
    </Routes>
  );
}

export default App;
