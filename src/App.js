import React from "react";
import Navbar from "./components/NavBar";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import "./App.css";
import { Context } from "./context";
import UserStore from "./store/UserStore";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
