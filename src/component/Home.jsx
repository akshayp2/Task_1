import React from "react";
import { Outlet } from "react-router-dom";
import GridComponent from "./Grid";

function App() {
  return (
    <div className="min-h-screen mx-auto bg-cover bg-black text-white">
      <GridComponent />
    </div>
  );
}

export default App;
