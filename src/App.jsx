import React from "react";
import "./app.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./components/Home/Home";

const App = () => {
  return (
    <div className="container">
      <div className="content">
        <Sidebar />
        <Home />
      </div>
    </div>
  );
};

export default App;
