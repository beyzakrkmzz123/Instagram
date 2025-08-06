import React from "react";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import "./i18n";

const App = () => {
  return (
    <div className="flex bg-black text-white min-h-screen">
      <Sidebar />
      <Home />
    </div>
  );
};

export default App;
