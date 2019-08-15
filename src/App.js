import React from "react";
import "./App.css";
import MonthNav from "./components/monthNav";
import MonthLog from "./components/monthLog";
import "bulma/css/bulma.css";

function App() {
  return (
    <>
      <MonthNav />
      <MonthLog />
    </>
  );
}

export default App;
