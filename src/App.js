import React from "react";
import "./App.css";
import LeftSidebar from "./components/UI/Left/LeftSidebar";
import RightArea from "./components/UI/Right/RightArea";
import Sidebar from "./components/Sidebar/Sidebar";
import Template from "./components/Templates/Template";

function App() {
  return (
    <div className="app">
      <LeftSidebar>
        <Sidebar />
      </LeftSidebar>
      <RightArea>
        <Template />
      </RightArea>
    </div>
  );
}

export default App;
