import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import "./index.css";
import { ContextProvider } from './Context';
import axios from 'axios';

axios.defaults.baseURL = "https://python-debug.herokuapp.com/";

import App from "./App";
import { Footer, NavBar } from "./components";



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <ContextProvider>
        <NavBar />
        <App />
        <Footer />
      </ContextProvider>
    </Router>
  </React.StrictMode>
);
