import React from "react";
import "./app.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./components/Home/Home";
import Router from "./Router";

const App = () => {
  return (
    <div className="container">
      <div className="content">
        <Sidebar />
        <Router />
      </div>
    </div>
  );
};

export default App;
