import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Register from "./components/Register";
// import Login from "./components/Login";
import Upload from "./components/Upload";
import './App.css';

const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          {/* <Route path={`/register/`} element={<Register />} />
          <Route path={`/login/`} element={<Login />} /> */}
          <Route path={`/`} element={<Upload />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;