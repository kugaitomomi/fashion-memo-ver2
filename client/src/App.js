import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Register from "./components/Register";
// import Login from "./components/Login";
import Upload from "./components/Upload";
import Home from "./components/Home";
import './App.css';

const App = () => {
  return (
    <div className="container">
      <Home />
    </div>
  );
};

export default App;