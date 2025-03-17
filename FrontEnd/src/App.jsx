import "./App.css";
import React from "react";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="bg-slate-950 h-screen w-screen">
      <Outlet />
    </div>
  );
}

export default App;
