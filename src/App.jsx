import React from "react";
import Sidebar from "./components/Sidebar";
import Router from "./Router";

const App = () => {
  return (
    <div className="w-screen h-screen p-4 bg-[var(--gray-700)]">
      <div className="w-full h-full bg-[var(--gray-800)] rounded-lg flex">
        <Sidebar />
        <Router />
      </div>
    </div>
  );
};

export default App;
