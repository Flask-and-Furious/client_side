import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import "./index.css";
import { ContextProvider } from './Context';
import axios from 'axios';

axios.defaults.baseURL = "https://python-debug.herokuapp.com/";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <ContextProvider>
      <App />
      </ContextProvider>
    </Router>
  </React.StrictMode>
);
